# `batchQuotaShare` Submodule <a name="`batchQuotaShare` Submodule" id="@cdktn/provider-awscc.batchQuotaShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchQuotaShare <a name="BatchQuotaShare" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share awscc_batch_quota_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

new batchQuotaShare.BatchQuotaShare(scope: Construct, id: string, config: BatchQuotaShareConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig">BatchQuotaShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig">BatchQuotaShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits">putCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration">putPreemptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration">putResourceSharingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityLimits` <a name="putCapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits"></a>

```typescript
public putCapacityLimits(value: IResolvable | BatchQuotaShareCapacityLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>[]

---

##### `putPreemptionConfiguration` <a name="putPreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration"></a>

```typescript
public putPreemptionConfiguration(value: BatchQuotaSharePreemptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---

##### `putResourceSharingConfiguration` <a name="putResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration"></a>

```typescript
public putResourceSharingConfiguration(value: BatchQuotaShareResourceSharingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

batchQuotaShare.BatchQuotaShare.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

batchQuotaShare.BatchQuotaShare.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

batchQuotaShare.BatchQuotaShare.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

batchQuotaShare.BatchQuotaShare.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchQuotaShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchQuotaShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchQuotaShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration">preemptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn">quotaShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration">resourceSharingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput">capacityLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput">jobQueueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput">preemptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput">quotaShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput">resourceSharingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue">jobQueue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName">quotaShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits"></a>

```typescript
public readonly capacityLimits: BatchQuotaShareCapacityLimitsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `preemptionConfiguration`<sup>Required</sup> <a name="preemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration"></a>

```typescript
public readonly preemptionConfiguration: BatchQuotaSharePreemptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a>

---

##### `quotaShareArn`<sup>Required</sup> <a name="quotaShareArn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn"></a>

```typescript
public readonly quotaShareArn: string;
```

- *Type:* string

---

##### `resourceSharingConfiguration`<sup>Required</sup> <a name="resourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration"></a>

```typescript
public readonly resourceSharingConfiguration: BatchQuotaShareResourceSharingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a>

---

##### `capacityLimitsInput`<sup>Optional</sup> <a name="capacityLimitsInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput"></a>

```typescript
public readonly capacityLimitsInput: IResolvable | BatchQuotaShareCapacityLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>[]

---

##### `jobQueueInput`<sup>Optional</sup> <a name="jobQueueInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput"></a>

```typescript
public readonly jobQueueInput: string;
```

- *Type:* string

---

##### `preemptionConfigurationInput`<sup>Optional</sup> <a name="preemptionConfigurationInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput"></a>

```typescript
public readonly preemptionConfigurationInput: IResolvable | BatchQuotaSharePreemptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---

##### `quotaShareNameInput`<sup>Optional</sup> <a name="quotaShareNameInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput"></a>

```typescript
public readonly quotaShareNameInput: string;
```

- *Type:* string

---

##### `resourceSharingConfigurationInput`<sup>Optional</sup> <a name="resourceSharingConfigurationInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput"></a>

```typescript
public readonly resourceSharingConfigurationInput: IResolvable | BatchQuotaShareResourceSharingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `jobQueue`<sup>Required</sup> <a name="jobQueue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue"></a>

```typescript
public readonly jobQueue: string;
```

- *Type:* string

---

##### `quotaShareName`<sup>Required</sup> <a name="quotaShareName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName"></a>

```typescript
public readonly quotaShareName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchQuotaShareCapacityLimits <a name="BatchQuotaShareCapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

const batchQuotaShareCapacityLimits: batchQuotaShare.BatchQuotaShareCapacityLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit">capacityUnit</a></code> | <code>string</code> | The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | The maximum capacity available for the quota share. |

---

##### `capacityUnit`<sup>Required</sup> <a name="capacityUnit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit"></a>

```typescript
public readonly capacityUnit: string;
```

- *Type:* string

The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#capacity_unit BatchQuotaShare#capacity_unit}

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

The maximum capacity available for the quota share.

This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#max_capacity BatchQuotaShare#max_capacity}

---

### BatchQuotaShareConfig <a name="BatchQuotaShareConfig" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

const batchQuotaShareConfig: batchQuotaShare.BatchQuotaShareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits">capacityLimits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>[]</code> | A list that specifies the quantity and type of compute capacity allocated to the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue">jobQueue</a></code> | <code>string</code> | The AWS Batch job queue associated with the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration">preemptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | Specifies the preemption behavior for jobs in a quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName">quotaShareName</a></code> | <code>string</code> | The name of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration">resourceSharingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state">state</a></code> | <code>string</code> | The state of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags that you apply to the quota share to help you categorize and organize your resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits"></a>

```typescript
public readonly capacityLimits: IResolvable | BatchQuotaShareCapacityLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>[]

A list that specifies the quantity and type of compute capacity allocated to the quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#capacity_limits BatchQuotaShare#capacity_limits}

---

##### `jobQueue`<sup>Required</sup> <a name="jobQueue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue"></a>

```typescript
public readonly jobQueue: string;
```

- *Type:* string

The AWS Batch job queue associated with the quota share.

This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#job_queue BatchQuotaShare#job_queue}

---

##### `preemptionConfiguration`<sup>Required</sup> <a name="preemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration"></a>

```typescript
public readonly preemptionConfiguration: BatchQuotaSharePreemptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

Specifies the preemption behavior for jobs in a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#preemption_configuration BatchQuotaShare#preemption_configuration}

---

##### `quotaShareName`<sup>Required</sup> <a name="quotaShareName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName"></a>

```typescript
public readonly quotaShareName: string;
```

- *Type:* string

The name of the quota share.

It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#quota_share_name BatchQuotaShare#quota_share_name}

---

##### `resourceSharingConfiguration`<sup>Required</sup> <a name="resourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration"></a>

```typescript
public readonly resourceSharingConfiguration: BatchQuotaShareResourceSharingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#resource_sharing_configuration BatchQuotaShare#resource_sharing_configuration}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the quota share.

If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#state BatchQuotaShare#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags that you apply to the quota share to help you categorize and organize your resources.

Each tag consists of a key and an optional value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#tags BatchQuotaShare#tags}

---

### BatchQuotaSharePreemptionConfiguration <a name="BatchQuotaSharePreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

const batchQuotaSharePreemptionConfiguration: batchQuotaShare.BatchQuotaSharePreemptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption">inSharePreemption</a></code> | <code>string</code> | Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share. |

---

##### `inSharePreemption`<sup>Required</sup> <a name="inSharePreemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption"></a>

```typescript
public readonly inSharePreemption: string;
```

- *Type:* string

Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#in_share_preemption BatchQuotaShare#in_share_preemption}

---

### BatchQuotaShareResourceSharingConfiguration <a name="BatchQuotaShareResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

const batchQuotaShareResourceSharingConfiguration: batchQuotaShare.BatchQuotaShareResourceSharingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy">strategy</a></code> | <code>string</code> | The resource sharing strategy for the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit">borrowLimit</a></code> | <code>number</code> | The maximum percentage of additional capacity that the quota share can borrow from other shares. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

The resource sharing strategy for the quota share.

The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#strategy BatchQuotaShare#strategy}

---

##### `borrowLimit`<sup>Optional</sup> <a name="borrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit"></a>

```typescript
public readonly borrowLimit: number;
```

- *Type:* number

The maximum percentage of additional capacity that the quota share can borrow from other shares.

`BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_quota_share#borrow_limit BatchQuotaShare#borrow_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchQuotaShareCapacityLimitsList <a name="BatchQuotaShareCapacityLimitsList" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

new batchQuotaShare.BatchQuotaShareCapacityLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get"></a>

```typescript
public get(index: number): BatchQuotaShareCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchQuotaShareCapacityLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>[]

---


### BatchQuotaShareCapacityLimitsOutputReference <a name="BatchQuotaShareCapacityLimitsOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

new batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput">capacityUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit">capacityUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityUnitInput`<sup>Optional</sup> <a name="capacityUnitInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput"></a>

```typescript
public readonly capacityUnitInput: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `capacityUnit`<sup>Required</sup> <a name="capacityUnit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit"></a>

```typescript
public readonly capacityUnit: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchQuotaShareCapacityLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits">BatchQuotaShareCapacityLimits</a>

---


### BatchQuotaSharePreemptionConfigurationOutputReference <a name="BatchQuotaSharePreemptionConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

new batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput">inSharePreemptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption">inSharePreemption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inSharePreemptionInput`<sup>Optional</sup> <a name="inSharePreemptionInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput"></a>

```typescript
public readonly inSharePreemptionInput: string;
```

- *Type:* string

---

##### `inSharePreemption`<sup>Required</sup> <a name="inSharePreemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption"></a>

```typescript
public readonly inSharePreemption: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchQuotaSharePreemptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---


### BatchQuotaShareResourceSharingConfigurationOutputReference <a name="BatchQuotaShareResourceSharingConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer"></a>

```typescript
import { batchQuotaShare } from '@cdktn/provider-awscc'

new batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit">resetBorrowLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBorrowLimit` <a name="resetBorrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit"></a>

```typescript
public resetBorrowLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput">borrowLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput">strategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit">borrowLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `borrowLimitInput`<sup>Optional</sup> <a name="borrowLimitInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput"></a>

```typescript
public readonly borrowLimitInput: number;
```

- *Type:* number

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: string;
```

- *Type:* string

---

##### `borrowLimit`<sup>Required</sup> <a name="borrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit"></a>

```typescript
public readonly borrowLimit: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchQuotaShareResourceSharingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---



