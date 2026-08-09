# `route53RecoverycontrolRoutingControl` Submodule <a name="`route53RecoverycontrolRoutingControl` Submodule" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolRoutingControl <a name="Route53RecoverycontrolRoutingControl" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control awscc_route53recoverycontrol_routing_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer"></a>

```typescript
import { route53RecoverycontrolRoutingControl } from '@cdktn/provider-awscc'

new route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl(scope: Construct, id: string, config: Route53RecoverycontrolRoutingControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig">Route53RecoverycontrolRoutingControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig">Route53RecoverycontrolRoutingControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetClusterArn">resetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetControlPanelArn">resetControlPanelArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClusterArn` <a name="resetClusterArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetClusterArn"></a>

```typescript
public resetClusterArn(): void
```

##### `resetControlPanelArn` <a name="resetControlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.resetControlPanelArn"></a>

```typescript
public resetControlPanelArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolRoutingControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isConstruct"></a>

```typescript
import { route53RecoverycontrolRoutingControl } from '@cdktn/provider-awscc'

route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformElement"></a>

```typescript
import { route53RecoverycontrolRoutingControl } from '@cdktn/provider-awscc'

route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformResource"></a>

```typescript
import { route53RecoverycontrolRoutingControl } from '@cdktn/provider-awscc'

route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport"></a>

```typescript
import { route53RecoverycontrolRoutingControl } from '@cdktn/provider-awscc'

route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53RecoverycontrolRoutingControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoverycontrolRoutingControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoverycontrolRoutingControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolRoutingControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.routingControlArn">routingControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArnInput">controlPanelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArn">controlPanelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routingControlArn`<sup>Required</sup> <a name="routingControlArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.routingControlArn"></a>

```typescript
public readonly routingControlArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `controlPanelArnInput`<sup>Optional</sup> <a name="controlPanelArnInput" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArnInput"></a>

```typescript
public readonly controlPanelArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.controlPanelArn"></a>

```typescript
public readonly controlPanelArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolRoutingControlConfig <a name="Route53RecoverycontrolRoutingControlConfig" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.Initializer"></a>

```typescript
import { route53RecoverycontrolRoutingControl } from '@cdktn/provider-awscc'

const route53RecoverycontrolRoutingControlConfig: route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.name">name</a></code> | <code>string</code> | The name of the routing control. You can use any non-white space character in the name. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | Arn associated with Control Panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.controlPanelArn">controlPanelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the control panel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the routing control. You can use any non-white space character in the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#name Route53RecoverycontrolRoutingControl#name}

---

##### `clusterArn`<sup>Optional</sup> <a name="clusterArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Arn associated with Control Panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#cluster_arn Route53RecoverycontrolRoutingControl#cluster_arn}

---

##### `controlPanelArn`<sup>Optional</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.route53RecoverycontrolRoutingControl.Route53RecoverycontrolRoutingControlConfig.property.controlPanelArn"></a>

```typescript
public readonly controlPanelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53recoverycontrol_routing_control#control_panel_arn Route53RecoverycontrolRoutingControl#control_panel_arn}

---



