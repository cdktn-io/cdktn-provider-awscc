# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktn/provider-awscc.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check awscc_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

new route53HealthCheck.Route53HealthCheck(scope: Construct, id: string, config: Route53HealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig">putHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags">putHealthCheckTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags">resetHealthCheckTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheckConfig` <a name="putHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig"></a>

```typescript
public putHealthCheckConfig(value: Route53HealthCheckHealthCheckConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `putHealthCheckTags` <a name="putHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags"></a>

```typescript
public putHealthCheckTags(value: IResolvable | Route53HealthCheckHealthCheckTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

---

##### `resetHealthCheckTags` <a name="resetHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags"></a>

```typescript
public resetHealthCheckTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

route53HealthCheck.Route53HealthCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

route53HealthCheck.Route53HealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

route53HealthCheck.Route53HealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

route53HealthCheck.Route53HealthCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53HealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags">healthCheckTags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput">healthCheckConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput">healthCheckTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: Route53HealthCheckHealthCheckConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `healthCheckTags`<sup>Required</sup> <a name="healthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags"></a>

```typescript
public readonly healthCheckTags: Route53HealthCheckHealthCheckTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `healthCheckConfigInput`<sup>Optional</sup> <a name="healthCheckConfigInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput"></a>

```typescript
public readonly healthCheckConfigInput: IResolvable | Route53HealthCheckHealthCheckConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `healthCheckTagsInput`<sup>Optional</sup> <a name="healthCheckTagsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput"></a>

```typescript
public readonly healthCheckTagsInput: IResolvable | Route53HealthCheckHealthCheckTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

const route53HealthCheckConfig: route53HealthCheck.Route53HealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | A complex type that contains information about the health check. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags">healthCheckTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: Route53HealthCheckHealthCheckConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

A complex type that contains information about the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#health_check_config Route53HealthCheck#health_check_config}

---

##### `healthCheckTags`<sup>Optional</sup> <a name="healthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags"></a>

```typescript
public readonly healthCheckTags: IResolvable | Route53HealthCheckHealthCheckTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#health_check_tags Route53HealthCheck#health_check_tags}

---

### Route53HealthCheckHealthCheckConfig <a name="Route53HealthCheckHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

const route53HealthCheckHealthCheckConfig: route53HealthCheck.Route53HealthCheckHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier">alarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks">childHealthChecks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni">enableSni</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold">healthThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted">inverted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency">measureLatency</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval">requestInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath">resourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn">routingControlArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString">searchString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#type Route53HealthCheck#type}.

---

##### `alarmIdentifier`<sup>Optional</sup> <a name="alarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

```typescript
public readonly alarmIdentifier: Route53HealthCheckHealthCheckConfigAlarmIdentifier;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#alarm_identifier Route53HealthCheck#alarm_identifier}

---

##### `childHealthChecks`<sup>Optional</sup> <a name="childHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks"></a>

```typescript
public readonly childHealthChecks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}.

---

##### `enableSni`<sup>Optional</sup> <a name="enableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni"></a>

```typescript
public readonly enableSni: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fullyQualifiedDomainName`<sup>Optional</sup> <a name="fullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

```typescript
public readonly fullyQualifiedDomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}.

---

##### `healthThreshold`<sup>Optional</sup> <a name="healthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold"></a>

```typescript
public readonly healthThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}.

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="insufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

```typescript
public readonly insufficientDataHealthStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted"></a>

```typescript
public readonly inverted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measureLatency`<sup>Optional</sup> <a name="measureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency"></a>

```typescript
public readonly measureLatency: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#port Route53HealthCheck#port}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `requestInterval`<sup>Optional</sup> <a name="requestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval"></a>

```typescript
public readonly requestInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routingControlArn`<sup>Optional</sup> <a name="routingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn"></a>

```typescript
public readonly routingControlArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString"></a>

```typescript
public readonly searchString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}.

---

### Route53HealthCheckHealthCheckConfigAlarmIdentifier <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

const route53HealthCheckHealthCheckConfigAlarmIdentifier: route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name">name</a></code> | <code>string</code> | The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region">region</a></code> | <code>string</code> | For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#name Route53HealthCheck#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#region Route53HealthCheck#region}

---

### Route53HealthCheckHealthCheckTags <a name="Route53HealthCheckHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

const route53HealthCheckHealthCheckTags: route53HealthCheck.Route53HealthCheckHealthCheckTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#key Route53HealthCheck#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_health_check#value Route53HealthCheck#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

new route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckHealthCheckConfigAlarmIdentifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---


### Route53HealthCheckHealthCheckConfigOutputReference <a name="Route53HealthCheckHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

new route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier">putAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier">resetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks">resetChildHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni">resetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName">resetFullyQualifiedDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold">resetHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus">resetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted">resetInverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency">resetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval">resetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn">resetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString">resetSearchString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarmIdentifier` <a name="putAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier"></a>

```typescript
public putAlarmIdentifier(value: Route53HealthCheckHealthCheckConfigAlarmIdentifier): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `resetAlarmIdentifier` <a name="resetAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier"></a>

```typescript
public resetAlarmIdentifier(): void
```

##### `resetChildHealthChecks` <a name="resetChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks"></a>

```typescript
public resetChildHealthChecks(): void
```

##### `resetEnableSni` <a name="resetEnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni"></a>

```typescript
public resetEnableSni(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetFullyQualifiedDomainName` <a name="resetFullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName"></a>

```typescript
public resetFullyQualifiedDomainName(): void
```

##### `resetHealthThreshold` <a name="resetHealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold"></a>

```typescript
public resetHealthThreshold(): void
```

##### `resetInsufficientDataHealthStatus` <a name="resetInsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus"></a>

```typescript
public resetInsufficientDataHealthStatus(): void
```

##### `resetInverted` <a name="resetInverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted"></a>

```typescript
public resetInverted(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetMeasureLatency` <a name="resetMeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency"></a>

```typescript
public resetMeasureLatency(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRequestInterval` <a name="resetRequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval"></a>

```typescript
public resetRequestInterval(): void
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath"></a>

```typescript
public resetResourcePath(): void
```

##### `resetRoutingControlArn` <a name="resetRoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn"></a>

```typescript
public resetRoutingControlArn(): void
```

##### `resetSearchString` <a name="resetSearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString"></a>

```typescript
public resetSearchString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier">alarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput">alarmIdentifierInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput">childHealthChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput">enableSniInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput">fullyQualifiedDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput">healthThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput">insufficientDataHealthStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput">invertedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput">measureLatencyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput">requestIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput">resourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput">routingControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput">searchStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks">childHealthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni">enableSni</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold">healthThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted">inverted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency">measureLatency</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval">requestInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn">routingControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString">searchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmIdentifier`<sup>Required</sup> <a name="alarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier"></a>

```typescript
public readonly alarmIdentifier: Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a>

---

##### `alarmIdentifierInput`<sup>Optional</sup> <a name="alarmIdentifierInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput"></a>

```typescript
public readonly alarmIdentifierInput: IResolvable | Route53HealthCheckHealthCheckConfigAlarmIdentifier;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `childHealthChecksInput`<sup>Optional</sup> <a name="childHealthChecksInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput"></a>

```typescript
public readonly childHealthChecksInput: string[];
```

- *Type:* string[]

---

##### `enableSniInput`<sup>Optional</sup> <a name="enableSniInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput"></a>

```typescript
public readonly enableSniInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `fullyQualifiedDomainNameInput`<sup>Optional</sup> <a name="fullyQualifiedDomainNameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput"></a>

```typescript
public readonly fullyQualifiedDomainNameInput: string;
```

- *Type:* string

---

##### `healthThresholdInput`<sup>Optional</sup> <a name="healthThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput"></a>

```typescript
public readonly healthThresholdInput: number;
```

- *Type:* number

---

##### `insufficientDataHealthStatusInput`<sup>Optional</sup> <a name="insufficientDataHealthStatusInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput"></a>

```typescript
public readonly insufficientDataHealthStatusInput: string;
```

- *Type:* string

---

##### `invertedInput`<sup>Optional</sup> <a name="invertedInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput"></a>

```typescript
public readonly invertedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `measureLatencyInput`<sup>Optional</sup> <a name="measureLatencyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput"></a>

```typescript
public readonly measureLatencyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `requestIntervalInput`<sup>Optional</sup> <a name="requestIntervalInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput"></a>

```typescript
public readonly requestIntervalInput: number;
```

- *Type:* number

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```typescript
public readonly resourcePathInput: string;
```

- *Type:* string

---

##### `routingControlArnInput`<sup>Optional</sup> <a name="routingControlArnInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput"></a>

```typescript
public readonly routingControlArnInput: string;
```

- *Type:* string

---

##### `searchStringInput`<sup>Optional</sup> <a name="searchStringInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput"></a>

```typescript
public readonly searchStringInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `childHealthChecks`<sup>Required</sup> <a name="childHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks"></a>

```typescript
public readonly childHealthChecks: string[];
```

- *Type:* string[]

---

##### `enableSni`<sup>Required</sup> <a name="enableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni"></a>

```typescript
public readonly enableSni: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="fullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName"></a>

```typescript
public readonly fullyQualifiedDomainName: string;
```

- *Type:* string

---

##### `healthThreshold`<sup>Required</sup> <a name="healthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold"></a>

```typescript
public readonly healthThreshold: number;
```

- *Type:* number

---

##### `insufficientDataHealthStatus`<sup>Required</sup> <a name="insufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus"></a>

```typescript
public readonly insufficientDataHealthStatus: string;
```

- *Type:* string

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted"></a>

```typescript
public readonly inverted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `measureLatency`<sup>Required</sup> <a name="measureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency"></a>

```typescript
public readonly measureLatency: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requestInterval`<sup>Required</sup> <a name="requestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval"></a>

```typescript
public readonly requestInterval: number;
```

- *Type:* number

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `routingControlArn`<sup>Required</sup> <a name="routingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn"></a>

```typescript
public readonly routingControlArn: string;
```

- *Type:* string

---

##### `searchString`<sup>Required</sup> <a name="searchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString"></a>

```typescript
public readonly searchString: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckHealthCheckConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---


### Route53HealthCheckHealthCheckTagsList <a name="Route53HealthCheckHealthCheckTagsList" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

new route53HealthCheck.Route53HealthCheckHealthCheckTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get"></a>

```typescript
public get(index: number): Route53HealthCheckHealthCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckHealthCheckTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>[]

---


### Route53HealthCheckHealthCheckTagsOutputReference <a name="Route53HealthCheckHealthCheckTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer"></a>

```typescript
import { route53HealthCheck } from '@cdktn/provider-awscc'

new route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HealthCheckHealthCheckTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags">Route53HealthCheckHealthCheckTags</a>

---



