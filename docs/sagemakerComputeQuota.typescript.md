# `sagemakerComputeQuota` Submodule <a name="`sagemakerComputeQuota` Submodule" id="@cdktn/provider-awscc.sagemakerComputeQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerComputeQuota <a name="SagemakerComputeQuota" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota awscc_sagemaker_compute_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuota(scope: Construct, id: string, config: SagemakerComputeQuotaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig">SagemakerComputeQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig">SagemakerComputeQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig">putComputeQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaTarget">putComputeQuotaTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetActivationState">resetActivationState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeQuotaConfig` <a name="putComputeQuotaConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig"></a>

```typescript
public putComputeQuotaConfig(value: SagemakerComputeQuotaComputeQuotaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

---

##### `putComputeQuotaTarget` <a name="putComputeQuotaTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaTarget"></a>

```typescript
public putComputeQuotaTarget(value: SagemakerComputeQuotaComputeQuotaTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerComputeQuotaTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>[]

---

##### `resetActivationState` <a name="resetActivationState" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetActivationState"></a>

```typescript
public resetActivationState(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerComputeQuota resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isConstruct"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

sagemakerComputeQuota.SagemakerComputeQuota.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformElement"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

sagemakerComputeQuota.SagemakerComputeQuota.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformResource"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

sagemakerComputeQuota.SagemakerComputeQuota.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerComputeQuota resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerComputeQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerComputeQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerComputeQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaArn">computeQuotaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfig">computeQuotaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaId">computeQuotaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTarget">computeQuotaTarget</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference">SagemakerComputeQuotaComputeQuotaTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaVersion">computeQuotaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList">SagemakerComputeQuotaTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationStateInput">activationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfigInput">computeQuotaConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTargetInput">computeQuotaTargetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationState">activationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `computeQuotaArn`<sup>Required</sup> <a name="computeQuotaArn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaArn"></a>

```typescript
public readonly computeQuotaArn: string;
```

- *Type:* string

---

##### `computeQuotaConfig`<sup>Required</sup> <a name="computeQuotaConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfig"></a>

```typescript
public readonly computeQuotaConfig: SagemakerComputeQuotaComputeQuotaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigOutputReference</a>

---

##### `computeQuotaId`<sup>Required</sup> <a name="computeQuotaId" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaId"></a>

```typescript
public readonly computeQuotaId: string;
```

- *Type:* string

---

##### `computeQuotaTarget`<sup>Required</sup> <a name="computeQuotaTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTarget"></a>

```typescript
public readonly computeQuotaTarget: SagemakerComputeQuotaComputeQuotaTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference">SagemakerComputeQuotaComputeQuotaTargetOutputReference</a>

---

##### `computeQuotaVersion`<sup>Required</sup> <a name="computeQuotaVersion" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaVersion"></a>

```typescript
public readonly computeQuotaVersion: number;
```

- *Type:* number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tags"></a>

```typescript
public readonly tags: SagemakerComputeQuotaTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList">SagemakerComputeQuotaTagsList</a>

---

##### `activationStateInput`<sup>Optional</sup> <a name="activationStateInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationStateInput"></a>

```typescript
public readonly activationStateInput: string;
```

- *Type:* string

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `computeQuotaConfigInput`<sup>Optional</sup> <a name="computeQuotaConfigInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfigInput"></a>

```typescript
public readonly computeQuotaConfigInput: IResolvable | SagemakerComputeQuotaComputeQuotaConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

---

##### `computeQuotaTargetInput`<sup>Optional</sup> <a name="computeQuotaTargetInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTargetInput"></a>

```typescript
public readonly computeQuotaTargetInput: IResolvable | SagemakerComputeQuotaComputeQuotaTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerComputeQuotaTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>[]

---

##### `activationState`<sup>Required</sup> <a name="activationState" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationState"></a>

```typescript
public readonly activationState: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerComputeQuotaComputeQuotaConfig <a name="SagemakerComputeQuotaComputeQuotaConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaComputeQuotaConfig: sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.computeQuotaResources">computeQuotaResources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>[]</code> | Per-instance-type compute quotas for the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.preemptTeamTasks">preemptTeamTasks</a></code> | <code>string</code> | Team-task preemption policy. Defaults service-side to 'LowerPriority' when omitted on Create. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.resourceSharingConfig">resourceSharingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a></code> | Idle-resource-sharing strategy for this team's quota. When omitted, the service applies defaults (Strategy=LendAndBorrow, BorrowLimit=50). |

---

##### `computeQuotaResources`<sup>Optional</sup> <a name="computeQuotaResources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.computeQuotaResources"></a>

```typescript
public readonly computeQuotaResources: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>[]

Per-instance-type compute quotas for the team.

When VCpu / MemoryInGiB / Accelerators are partially specified, SageMaker auto-fills the remaining fields ratio-proportionally to the underlying instance ? Read may return values the customer did not supply (drift may flag this).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_resources SagemakerComputeQuota#compute_quota_resources}

---

##### `preemptTeamTasks`<sup>Optional</sup> <a name="preemptTeamTasks" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.preemptTeamTasks"></a>

```typescript
public readonly preemptTeamTasks: string;
```

- *Type:* string

Team-task preemption policy. Defaults service-side to 'LowerPriority' when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#preempt_team_tasks SagemakerComputeQuota#preempt_team_tasks}

---

##### `resourceSharingConfig`<sup>Optional</sup> <a name="resourceSharingConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.resourceSharingConfig"></a>

```typescript
public readonly resourceSharingConfig: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

Idle-resource-sharing strategy for this team's quota. When omitted, the service applies defaults (Strategy=LendAndBorrow, BorrowLimit=50).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#resource_sharing_config SagemakerComputeQuota#resource_sharing_config}

---

### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources: sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.acceleratorPartition">acceleratorPartition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a></code> | Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.accelerators">accelerators</a></code> | <code>number</code> | The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.count">count</a></code> | <code>number</code> | The number of instances of this type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.instanceType">instanceType</a></code> | <code>string</code> | The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.memoryInGiB">memoryInGiB</a></code> | <code>number</code> | The memory in GiB allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.vCpu">vCpu</a></code> | <code>number</code> | The number of vCPUs allocated to the team. |

---

##### `acceleratorPartition`<sup>Optional</sup> <a name="acceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.acceleratorPartition"></a>

```typescript
public readonly acceleratorPartition: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation.

Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerator_partition SagemakerComputeQuota#accelerator_partition}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.accelerators"></a>

```typescript
public readonly accelerators: number;
```

- *Type:* number

The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerators SagemakerComputeQuota#accelerators}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of instances of this type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#instance_type SagemakerComputeQuota#instance_type}

---

##### `memoryInGiB`<sup>Optional</sup> <a name="memoryInGiB" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.memoryInGiB"></a>

```typescript
public readonly memoryInGiB: number;
```

- *Type:* number

The memory in GiB allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / VCpu ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#memory_in_gi_b SagemakerComputeQuota#memory_in_gi_b}

---

##### `vCpu`<sup>Optional</sup> <a name="vCpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

The number of vCPUs allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#v_cpu SagemakerComputeQuota#v_cpu}

---

### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition: sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.count">count</a></code> | <code>number</code> | The number of MIG partitions of the specified Type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.type">type</a></code> | <code>string</code> | MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of MIG partitions of the specified Type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type SagemakerComputeQuota#type}

---

### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig: sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.absoluteBorrowLimits">absoluteBorrowLimits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>[]</code> | Per-instance-type absolute caps on resources this team can borrow. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.borrowLimit">borrowLimit</a></code> | <code>number</code> | Maximum percentage of the team's idle quota that can be borrowed by other teams. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.strategy">strategy</a></code> | <code>string</code> | How this team participates in idle-resource sharing. |

---

##### `absoluteBorrowLimits`<sup>Optional</sup> <a name="absoluteBorrowLimits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.absoluteBorrowLimits"></a>

```typescript
public readonly absoluteBorrowLimits: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>[]

Per-instance-type absolute caps on resources this team can borrow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#absolute_borrow_limits SagemakerComputeQuota#absolute_borrow_limits}

---

##### `borrowLimit`<sup>Optional</sup> <a name="borrowLimit" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.borrowLimit"></a>

```typescript
public readonly borrowLimit: number;
```

- *Type:* number

Maximum percentage of the team's idle quota that can be borrowed by other teams.

Smithy admits 0..10000; in practice the service-documented operational range is 1..500. Defaults service-side to 50 when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#borrow_limit SagemakerComputeQuota#borrow_limit}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

How this team participates in idle-resource sharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#strategy SagemakerComputeQuota#strategy}

---

### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits: sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.acceleratorPartition">acceleratorPartition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a></code> | Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.accelerators">accelerators</a></code> | <code>number</code> | The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.count">count</a></code> | <code>number</code> | The number of instances of this type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.instanceType">instanceType</a></code> | <code>string</code> | The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.memoryInGiB">memoryInGiB</a></code> | <code>number</code> | The memory in GiB allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.vCpu">vCpu</a></code> | <code>number</code> | The number of vCPUs allocated to the team. |

---

##### `acceleratorPartition`<sup>Optional</sup> <a name="acceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.acceleratorPartition"></a>

```typescript
public readonly acceleratorPartition: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation.

Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerator_partition SagemakerComputeQuota#accelerator_partition}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.accelerators"></a>

```typescript
public readonly accelerators: number;
```

- *Type:* number

The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerators SagemakerComputeQuota#accelerators}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of instances of this type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#instance_type SagemakerComputeQuota#instance_type}

---

##### `memoryInGiB`<sup>Optional</sup> <a name="memoryInGiB" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.memoryInGiB"></a>

```typescript
public readonly memoryInGiB: number;
```

- *Type:* number

The memory in GiB allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / VCpu ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#memory_in_gi_b SagemakerComputeQuota#memory_in_gi_b}

---

##### `vCpu`<sup>Optional</sup> <a name="vCpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

The number of vCPUs allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#v_cpu SagemakerComputeQuota#v_cpu}

---

### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition: sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.count">count</a></code> | <code>number</code> | The number of MIG partitions of the specified Type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.type">type</a></code> | <code>string</code> | MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of MIG partitions of the specified Type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type SagemakerComputeQuota#type}

---

### SagemakerComputeQuotaComputeQuotaTarget <a name="SagemakerComputeQuotaComputeQuotaTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaComputeQuotaTarget: sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.teamName">teamName</a></code> | <code>string</code> | The name of the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.fairShareWeight">fairShareWeight</a></code> | <code>number</code> | Relative fair-share weight when fair-share scheduling is enabled on the parent ClusterSchedulerConfig. Defaults service-side to 0 when omitted. |

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

The name of the team.

Materialized as Kubernetes namespace 'hyperpod-ns-<TeamName>' on the EKS cluster, so the value must satisfy RFC 1123 namespace constraints. Reassignment is not supported (createOnly).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#team_name SagemakerComputeQuota#team_name}

---

##### `fairShareWeight`<sup>Optional</sup> <a name="fairShareWeight" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.fairShareWeight"></a>

```typescript
public readonly fairShareWeight: number;
```

- *Type:* number

Relative fair-share weight when fair-share scheduling is enabled on the parent ClusterSchedulerConfig. Defaults service-side to 0 when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#fair_share_weight SagemakerComputeQuota#fair_share_weight}

---

### SagemakerComputeQuotaConfig <a name="SagemakerComputeQuotaConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaConfig: sagemakerComputeQuota.SagemakerComputeQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | The ARN of the EKS-orchestrated SageMaker HyperPod cluster the compute allocation definition is bound to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaConfig">computeQuotaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a></code> | Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaTarget">computeQuotaTarget</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a></code> | The team this compute allocation rule applies to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.name">name</a></code> | <code>string</code> | The name of the compute allocation definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.activationState">activationState</a></code> | <code>string</code> | Whether the compute allocation rule is active. Defaults service-side to 'Enabled' when omitted on Create. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.description">description</a></code> | <code>string</code> | A free-form description of the compute allocation definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>[]</code> | Tags to associate with the compute allocation definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The ARN of the EKS-orchestrated SageMaker HyperPod cluster the compute allocation definition is bound to.

Slurm-orchestrated clusters are rejected by the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#cluster_arn SagemakerComputeQuota#cluster_arn}

---

##### `computeQuotaConfig`<sup>Required</sup> <a name="computeQuotaConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaConfig"></a>

```typescript
public readonly computeQuotaConfig: SagemakerComputeQuotaComputeQuotaConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_config SagemakerComputeQuota#compute_quota_config}

---

##### `computeQuotaTarget`<sup>Required</sup> <a name="computeQuotaTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaTarget"></a>

```typescript
public readonly computeQuotaTarget: SagemakerComputeQuotaComputeQuotaTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

The team this compute allocation rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_target SagemakerComputeQuota#compute_quota_target}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#name SagemakerComputeQuota#name}

---

##### `activationState`<sup>Optional</sup> <a name="activationState" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.activationState"></a>

```typescript
public readonly activationState: string;
```

- *Type:* string

Whether the compute allocation rule is active. Defaults service-side to 'Enabled' when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#activation_state SagemakerComputeQuota#activation_state}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A free-form description of the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#description SagemakerComputeQuota#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerComputeQuotaTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>[]

Tags to associate with the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#tags SagemakerComputeQuota#tags}

---

### SagemakerComputeQuotaTags <a name="SagemakerComputeQuotaTags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

const sagemakerComputeQuotaTags: sagemakerComputeQuota.SagemakerComputeQuotaTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#key SagemakerComputeQuota#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#value SagemakerComputeQuota#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#key SagemakerComputeQuota#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#value SagemakerComputeQuota#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

---


### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get"></a>

```typescript
public get(index: number): SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>[]

---


### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.putAcceleratorPartition">putAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAcceleratorPartition">resetAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetMemoryInGiB">resetMemoryInGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetVCpu">resetVCpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorPartition` <a name="putAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.putAcceleratorPartition"></a>

```typescript
public putAcceleratorPartition(value: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.putAcceleratorPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

---

##### `resetAcceleratorPartition` <a name="resetAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAcceleratorPartition"></a>

```typescript
public resetAcceleratorPartition(): void
```

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAccelerators"></a>

```typescript
public resetAccelerators(): void
```

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetMemoryInGiB` <a name="resetMemoryInGiB" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetMemoryInGiB"></a>

```typescript
public resetMemoryInGiB(): void
```

##### `resetVCpu` <a name="resetVCpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetVCpu"></a>

```typescript
public resetVCpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartition">acceleratorPartition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartitionInput">acceleratorPartitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorsInput">acceleratorsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiBInput">memoryInGiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpuInput">vCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.accelerators">accelerators</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiB">memoryInGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpu">vCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorPartition`<sup>Required</sup> <a name="acceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartition"></a>

```typescript
public readonly acceleratorPartition: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference</a>

---

##### `acceleratorPartitionInput`<sup>Optional</sup> <a name="acceleratorPartitionInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartitionInput"></a>

```typescript
public readonly acceleratorPartitionInput: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorsInput"></a>

```typescript
public readonly acceleratorsInput: number;
```

- *Type:* number

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `memoryInGiBInput`<sup>Optional</sup> <a name="memoryInGiBInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiBInput"></a>

```typescript
public readonly memoryInGiBInput: number;
```

- *Type:* number

---

##### `vCpuInput`<sup>Optional</sup> <a name="vCpuInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpuInput"></a>

```typescript
public readonly vCpuInput: number;
```

- *Type:* number

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.accelerators"></a>

```typescript
public readonly accelerators: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `memoryInGiB`<sup>Required</sup> <a name="memoryInGiB" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiB"></a>

```typescript
public readonly memoryInGiB: number;
```

- *Type:* number

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>

---


### SagemakerComputeQuotaComputeQuotaConfigOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putComputeQuotaResources">putComputeQuotaResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig">putResourceSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetComputeQuotaResources">resetComputeQuotaResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetPreemptTeamTasks">resetPreemptTeamTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetResourceSharingConfig">resetResourceSharingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComputeQuotaResources` <a name="putComputeQuotaResources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putComputeQuotaResources"></a>

```typescript
public putComputeQuotaResources(value: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putComputeQuotaResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>[]

---

##### `putResourceSharingConfig` <a name="putResourceSharingConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig"></a>

```typescript
public putResourceSharingConfig(value: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

---

##### `resetComputeQuotaResources` <a name="resetComputeQuotaResources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetComputeQuotaResources"></a>

```typescript
public resetComputeQuotaResources(): void
```

##### `resetPreemptTeamTasks` <a name="resetPreemptTeamTasks" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetPreemptTeamTasks"></a>

```typescript
public resetPreemptTeamTasks(): void
```

##### `resetResourceSharingConfig` <a name="resetResourceSharingConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetResourceSharingConfig"></a>

```typescript
public resetResourceSharingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResources">computeQuotaResources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfig">resourceSharingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResourcesInput">computeQuotaResourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasksInput">preemptTeamTasksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfigInput">resourceSharingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasks">preemptTeamTasks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeQuotaResources`<sup>Required</sup> <a name="computeQuotaResources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResources"></a>

```typescript
public readonly computeQuotaResources: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList</a>

---

##### `resourceSharingConfig`<sup>Required</sup> <a name="resourceSharingConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfig"></a>

```typescript
public readonly resourceSharingConfig: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference</a>

---

##### `computeQuotaResourcesInput`<sup>Optional</sup> <a name="computeQuotaResourcesInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResourcesInput"></a>

```typescript
public readonly computeQuotaResourcesInput: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>[]

---

##### `preemptTeamTasksInput`<sup>Optional</sup> <a name="preemptTeamTasksInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasksInput"></a>

```typescript
public readonly preemptTeamTasksInput: string;
```

- *Type:* string

---

##### `resourceSharingConfigInput`<sup>Optional</sup> <a name="resourceSharingConfigInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfigInput"></a>

```typescript
public readonly resourceSharingConfigInput: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

---

##### `preemptTeamTasks`<sup>Required</sup> <a name="preemptTeamTasks" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasks"></a>

```typescript
public readonly preemptTeamTasks: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get"></a>

```typescript
public get(index: number): SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>[]

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.putAcceleratorPartition">putAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAcceleratorPartition">resetAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetMemoryInGiB">resetMemoryInGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetVCpu">resetVCpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorPartition` <a name="putAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.putAcceleratorPartition"></a>

```typescript
public putAcceleratorPartition(value: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.putAcceleratorPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

---

##### `resetAcceleratorPartition` <a name="resetAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAcceleratorPartition"></a>

```typescript
public resetAcceleratorPartition(): void
```

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAccelerators"></a>

```typescript
public resetAccelerators(): void
```

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetMemoryInGiB` <a name="resetMemoryInGiB" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetMemoryInGiB"></a>

```typescript
public resetMemoryInGiB(): void
```

##### `resetVCpu` <a name="resetVCpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetVCpu"></a>

```typescript
public resetVCpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartition">acceleratorPartition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartitionInput">acceleratorPartitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorsInput">acceleratorsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiBInput">memoryInGiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpuInput">vCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.accelerators">accelerators</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiB">memoryInGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpu">vCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorPartition`<sup>Required</sup> <a name="acceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartition"></a>

```typescript
public readonly acceleratorPartition: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference</a>

---

##### `acceleratorPartitionInput`<sup>Optional</sup> <a name="acceleratorPartitionInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartitionInput"></a>

```typescript
public readonly acceleratorPartitionInput: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorsInput"></a>

```typescript
public readonly acceleratorsInput: number;
```

- *Type:* number

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `memoryInGiBInput`<sup>Optional</sup> <a name="memoryInGiBInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiBInput"></a>

```typescript
public readonly memoryInGiBInput: number;
```

- *Type:* number

---

##### `vCpuInput`<sup>Optional</sup> <a name="vCpuInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpuInput"></a>

```typescript
public readonly vCpuInput: number;
```

- *Type:* number

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.accelerators"></a>

```typescript
public readonly accelerators: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `memoryInGiB`<sup>Required</sup> <a name="memoryInGiB" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiB"></a>

```typescript
public readonly memoryInGiB: number;
```

- *Type:* number

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.putAbsoluteBorrowLimits">putAbsoluteBorrowLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetAbsoluteBorrowLimits">resetAbsoluteBorrowLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetBorrowLimit">resetBorrowLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbsoluteBorrowLimits` <a name="putAbsoluteBorrowLimits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.putAbsoluteBorrowLimits"></a>

```typescript
public putAbsoluteBorrowLimits(value: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.putAbsoluteBorrowLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>[]

---

##### `resetAbsoluteBorrowLimits` <a name="resetAbsoluteBorrowLimits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetAbsoluteBorrowLimits"></a>

```typescript
public resetAbsoluteBorrowLimits(): void
```

##### `resetBorrowLimit` <a name="resetBorrowLimit" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetBorrowLimit"></a>

```typescript
public resetBorrowLimit(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimits">absoluteBorrowLimits</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimitsInput">absoluteBorrowLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimitInput">borrowLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimit">borrowLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteBorrowLimits`<sup>Required</sup> <a name="absoluteBorrowLimits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimits"></a>

```typescript
public readonly absoluteBorrowLimits: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList</a>

---

##### `absoluteBorrowLimitsInput`<sup>Optional</sup> <a name="absoluteBorrowLimitsInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimitsInput"></a>

```typescript
public readonly absoluteBorrowLimitsInput: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>[]

---

##### `borrowLimitInput`<sup>Optional</sup> <a name="borrowLimitInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimitInput"></a>

```typescript
public readonly borrowLimitInput: number;
```

- *Type:* number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `borrowLimit`<sup>Required</sup> <a name="borrowLimit" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimit"></a>

```typescript
public readonly borrowLimit: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

---


### SagemakerComputeQuotaComputeQuotaTargetOutputReference <a name="SagemakerComputeQuotaComputeQuotaTargetOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resetFairShareWeight">resetFairShareWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFairShareWeight` <a name="resetFairShareWeight" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resetFairShareWeight"></a>

```typescript
public resetFairShareWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeightInput">fairShareWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamNameInput">teamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeight">fairShareWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamName">teamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fairShareWeightInput`<sup>Optional</sup> <a name="fairShareWeightInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeightInput"></a>

```typescript
public readonly fairShareWeightInput: number;
```

- *Type:* number

---

##### `teamNameInput`<sup>Optional</sup> <a name="teamNameInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamNameInput"></a>

```typescript
public readonly teamNameInput: string;
```

- *Type:* string

---

##### `fairShareWeight`<sup>Required</sup> <a name="fairShareWeight" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeight"></a>

```typescript
public readonly fairShareWeight: number;
```

- *Type:* number

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaComputeQuotaTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

---


### SagemakerComputeQuotaTagsList <a name="SagemakerComputeQuotaTagsList" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.get"></a>

```typescript
public get(index: number): SagemakerComputeQuotaTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>[]

---


### SagemakerComputeQuotaTagsOutputReference <a name="SagemakerComputeQuotaTagsOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerComputeQuota } from '@cdktn/provider-awscc'

new sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerComputeQuotaTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>

---



