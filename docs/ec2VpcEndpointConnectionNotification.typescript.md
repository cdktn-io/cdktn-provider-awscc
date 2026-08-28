# `ec2VpcEndpointConnectionNotification` Submodule <a name="`ec2VpcEndpointConnectionNotification` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpointConnectionNotification <a name="Ec2VpcEndpointConnectionNotification" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_connection_notification awscc_ec2_vpc_endpoint_connection_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer"></a>

```typescript
import { ec2VpcEndpointConnectionNotification } from '@cdktn/provider-awscc'

new ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification(scope: Construct, id: string, config: Ec2VpcEndpointConnectionNotificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig">Ec2VpcEndpointConnectionNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig">Ec2VpcEndpointConnectionNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetServiceId">resetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetServiceId` <a name="resetServiceId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetServiceId"></a>

```typescript
public resetServiceId(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpointConnectionNotification resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct"></a>

```typescript
import { ec2VpcEndpointConnectionNotification } from '@cdktn/provider-awscc'

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement"></a>

```typescript
import { ec2VpcEndpointConnectionNotification } from '@cdktn/provider-awscc'

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource"></a>

```typescript
import { ec2VpcEndpointConnectionNotification } from '@cdktn/provider-awscc'

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport"></a>

```typescript
import { ec2VpcEndpointConnectionNotification } from '@cdktn/provider-awscc'

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpcEndpointConnectionNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcEndpointConnectionNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcEndpointConnectionNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_connection_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpointConnectionNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointConnectionNotificationId">vpcEndpointConnectionNotificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEventsInput">connectionEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArnInput">connectionNotificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEvents">connectionEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArn">connectionNotificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcEndpointConnectionNotificationId`<sup>Required</sup> <a name="vpcEndpointConnectionNotificationId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointConnectionNotificationId"></a>

```typescript
public readonly vpcEndpointConnectionNotificationId: string;
```

- *Type:* string

---

##### `connectionEventsInput`<sup>Optional</sup> <a name="connectionEventsInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEventsInput"></a>

```typescript
public readonly connectionEventsInput: string[];
```

- *Type:* string[]

---

##### `connectionNotificationArnInput`<sup>Optional</sup> <a name="connectionNotificationArnInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArnInput"></a>

```typescript
public readonly connectionNotificationArnInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `connectionEvents`<sup>Required</sup> <a name="connectionEvents" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEvents"></a>

```typescript
public readonly connectionEvents: string[];
```

- *Type:* string[]

---

##### `connectionNotificationArn`<sup>Required</sup> <a name="connectionNotificationArn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArn"></a>

```typescript
public readonly connectionNotificationArn: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointConnectionNotificationConfig <a name="Ec2VpcEndpointConnectionNotificationConfig" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.Initializer"></a>

```typescript
import { ec2VpcEndpointConnectionNotification } from '@cdktn/provider-awscc'

const ec2VpcEndpointConnectionNotificationConfig: ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionEvents">connectionEvents</a></code> | <code>string[]</code> | The endpoint events for which to receive notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn">connectionNotificationArn</a></code> | <code>string</code> | The ARN of the SNS topic for the notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.serviceId">serviceId</a></code> | <code>string</code> | The ID of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | The ID of the endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionEvents`<sup>Required</sup> <a name="connectionEvents" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionEvents"></a>

```typescript
public readonly connectionEvents: string[];
```

- *Type:* string[]

The endpoint events for which to receive notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_events Ec2VpcEndpointConnectionNotification#connection_events}

---

##### `connectionNotificationArn`<sup>Required</sup> <a name="connectionNotificationArn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn"></a>

```typescript
public readonly connectionNotificationArn: string;
```

- *Type:* string

The ARN of the SNS topic for the notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_notification_arn Ec2VpcEndpointConnectionNotification#connection_notification_arn}

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ID of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_connection_notification#service_id Ec2VpcEndpointConnectionNotification#service_id}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

The ID of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_endpoint_connection_notification#vpc_endpoint_id Ec2VpcEndpointConnectionNotification#vpc_endpoint_id}

---



