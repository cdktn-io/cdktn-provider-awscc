# `route53HealthCheckSource` Submodule <a name="`route53HealthCheckSource` Submodule" id="@cdktn/provider-awscc.route53HealthCheckSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheckSource <a name="Route53HealthCheckSource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source awscc_route53_health_check_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

new route53HealthCheckSource.Route53HealthCheckSource(scope: Construct, id: string, config: Route53HealthCheckSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig">Route53HealthCheckSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig">Route53HealthCheckSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig">putHealthCheckSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheckSourceConfig` <a name="putHealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig"></a>

```typescript
public putHealthCheckSourceConfig(value: Route53HealthCheckSourceHealthCheckSourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putHealthCheckSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53HealthCheckSourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HealthCheckSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

route53HealthCheckSource.Route53HealthCheckSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53HealthCheckSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53HealthCheckSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53HealthCheckSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheckSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfig">healthCheckSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference">Route53HealthCheckSourceHealthCheckSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceId">healthCheckSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceStatus">healthCheckSourceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList">Route53HealthCheckSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfigInput">healthCheckSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `healthCheckSourceConfig`<sup>Required</sup> <a name="healthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfig"></a>

```typescript
public readonly healthCheckSourceConfig: Route53HealthCheckSourceHealthCheckSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference">Route53HealthCheckSourceHealthCheckSourceConfigOutputReference</a>

---

##### `healthCheckSourceId`<sup>Required</sup> <a name="healthCheckSourceId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceId"></a>

```typescript
public readonly healthCheckSourceId: string;
```

- *Type:* string

---

##### `healthCheckSourceStatus`<sup>Required</sup> <a name="healthCheckSourceStatus" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceStatus"></a>

```typescript
public readonly healthCheckSourceStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tags"></a>

```typescript
public readonly tags: Route53HealthCheckSourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList">Route53HealthCheckSourceTagsList</a>

---

##### `healthCheckSourceConfigInput`<sup>Optional</sup> <a name="healthCheckSourceConfigInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.healthCheckSourceConfigInput"></a>

```typescript
public readonly healthCheckSourceConfigInput: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53HealthCheckSourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckSourceConfig <a name="Route53HealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

const route53HealthCheckSourceConfig: route53HealthCheckSource.Route53HealthCheckSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.healthCheckSourceConfig">healthCheckSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | <p>The VPC, subnets, and security groups for the health check source.</p>. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `healthCheckSourceConfig`<sup>Required</sup> <a name="healthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.healthCheckSourceConfig"></a>

```typescript
public readonly healthCheckSourceConfig: Route53HealthCheckSourceHealthCheckSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

<p>The VPC, subnets, and security groups for the health check source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#health_check_source_config Route53HealthCheckSource#health_check_source_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53HealthCheckSourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#tags Route53HealthCheckSource#tags}

---

### Route53HealthCheckSourceHealthCheckSourceConfig <a name="Route53HealthCheckSourceHealthCheckSourceConfig" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

const route53HealthCheckSourceHealthCheckSourceConfig: route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.subnetConfigurationList">subnetConfigurationList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]</code> | <p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.vpcId">vpcId</a></code> | <code>string</code> | <p>The ID of the VPC that contains the subnets for the health check source. |

---

##### `subnetConfigurationList`<sup>Required</sup> <a name="subnetConfigurationList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.subnetConfigurationList"></a>

```typescript
public readonly subnetConfigurationList: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

<p>A complex type that contains one <code>SubnetConfiguration</code> element for each Availability Zone that Route 53 uses for private endpoint health checks in the Amazon Web Services Region.

Each element must be in a different Availability Zone. Most Regions require three elements. Regions that have only two such Availability Zones, such as US West (N. California), require two elements. Route 53 creates network interfaces in each subnet and sends health check requests from all of them.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_configuration_list Route53HealthCheckSource#subnet_configuration_list}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

<p>The ID of the VPC that contains the subnets for the health check source.

All subnets in <code>SubnetConfigurationList</code> must belong to this VPC.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#vpc_id Route53HealthCheckSource#vpc_id}

---

### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

const route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct: route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | <p>The ID of the Availability Zone that contains the subnet, for example <code>use1-az1</code>. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | <p>The IDs of one to ten security groups in the same VPC to associate with the network interfaces that Route 53 creates in this subnet. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.subnetId">subnetId</a></code> | <code>string</code> | <p>The ID of the subnet. The subnet must have free IP addresses for the network interfaces that Route 53 creates.</p>. |

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

<p>The ID of the Availability Zone that contains the subnet, for example <code>use1-az1</code>.

Specify the Availability Zone ID, not the Availability Zone name. Each subnet in a health check source must be in a different Availability Zone.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#availability_zone_id Route53HealthCheckSource#availability_zone_id}

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

<p>The IDs of one to ten security groups in the same VPC to associate with the network interfaces that Route 53 creates in this subnet.

The security groups must allow outbound traffic to the endpoints that the health checks monitor.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#security_group_id_list Route53HealthCheckSource#security_group_id_list}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

<p>The ID of the subnet. The subnet must have free IP addresses for the network interfaces that Route 53 creates.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#subnet_id Route53HealthCheckSource#subnet_id}

---

### Route53HealthCheckSourceTags <a name="Route53HealthCheckSourceTags" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

const route53HealthCheckSourceTags: route53HealthCheckSource.Route53HealthCheckSourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#key Route53HealthCheckSource#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_health_check_source#value Route53HealthCheckSource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckSourceHealthCheckSourceConfigOutputReference <a name="Route53HealthCheckSourceHealthCheckSourceConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

new route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList">putSubnetConfigurationList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubnetConfigurationList` <a name="putSubnetConfigurationList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList"></a>

```typescript
public putSubnetConfigurationList(value: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.putSubnetConfigurationList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList">subnetConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationListInput">subnetConfigurationListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetConfigurationList`<sup>Required</sup> <a name="subnetConfigurationList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationList"></a>

```typescript
public readonly subnetConfigurationList: Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList</a>

---

##### `subnetConfigurationListInput`<sup>Optional</sup> <a name="subnetConfigurationListInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.subnetConfigurationListInput"></a>

```typescript
public readonly subnetConfigurationListInput: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfig">Route53HealthCheckSourceHealthCheckSourceConfig</a>

---


### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

new route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get"></a>

```typescript
public get(index: number): Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>[]

---


### Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference <a name="Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

new route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdListInput">securityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneIdInput"></a>

```typescript
public readonly availabilityZoneIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdListInput`<sup>Optional</sup> <a name="securityGroupIdListInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdListInput"></a>

```typescript
public readonly securityGroupIdListInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct">Route53HealthCheckSourceHealthCheckSourceConfigSubnetConfigurationListStruct</a>

---


### Route53HealthCheckSourceTagsList <a name="Route53HealthCheckSourceTagsList" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

new route53HealthCheckSource.Route53HealthCheckSourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get"></a>

```typescript
public get(index: number): Route53HealthCheckSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckSourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>[]

---


### Route53HealthCheckSourceTagsOutputReference <a name="Route53HealthCheckSourceTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer"></a>

```typescript
import { route53HealthCheckSource } from '@cdktn/provider-awscc'

new route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckSourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheckSource.Route53HealthCheckSourceTags">Route53HealthCheckSourceTags</a>

---



