# `osisPipeline` Submodule <a name="`osisPipeline` Submodule" id="@cdktn/provider-awscc.osisPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsisPipeline <a name="OsisPipeline" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline awscc_osis_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipeline(scope: Construct, id: string, config: OsisPipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig">OsisPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig">OsisPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions">putBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions">putEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions">putLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions">resetBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions">resetEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions">resetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn">resetPipelineRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions">resetVpcOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBufferOptions` <a name="putBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions"></a>

```typescript
public putBufferOptions(value: OsisPipelineBufferOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---

##### `putEncryptionAtRestOptions` <a name="putEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions"></a>

```typescript
public putEncryptionAtRestOptions(value: OsisPipelineEncryptionAtRestOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---

##### `putLogPublishingOptions` <a name="putLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions"></a>

```typescript
public putLogPublishingOptions(value: OsisPipelineLogPublishingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy"></a>

```typescript
public putResourcePolicy(value: OsisPipelineResourcePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags"></a>

```typescript
public putTags(value: IResolvable | OsisPipelineTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions"></a>

```typescript
public putVpcOptions(value: OsisPipelineVpcOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---

##### `resetBufferOptions` <a name="resetBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions"></a>

```typescript
public resetBufferOptions(): void
```

##### `resetEncryptionAtRestOptions` <a name="resetEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions"></a>

```typescript
public resetEncryptionAtRestOptions(): void
```

##### `resetLogPublishingOptions` <a name="resetLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions"></a>

```typescript
public resetLogPublishingOptions(): void
```

##### `resetPipelineRoleArn` <a name="resetPipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn"></a>

```typescript
public resetPipelineRoleArn(): void
```

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy"></a>

```typescript
public resetResourcePolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcOptions` <a name="resetVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions"></a>

```typescript
public resetVpcOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

osisPipeline.OsisPipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

osisPipeline.OsisPipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

osisPipeline.OsisPipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

osisPipeline.OsisPipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsisPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsisPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OsisPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions">bufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls">ingestEndpointUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn">pipelineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService">vpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput">bufferOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput">encryptionAtRestOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput">logPublishingOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput">maxUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput">minUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput">pipelineConfigurationBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput">pipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput">pipelineRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits">maxUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits">minUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody">pipelineConfigurationBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn">pipelineRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bufferOptions`<sup>Required</sup> <a name="bufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions"></a>

```typescript
public readonly bufferOptions: OsisPipelineBufferOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a>

---

##### `encryptionAtRestOptions`<sup>Required</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions"></a>

```typescript
public readonly encryptionAtRestOptions: OsisPipelineEncryptionAtRestOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestEndpointUrls`<sup>Required</sup> <a name="ingestEndpointUrls" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls"></a>

```typescript
public readonly ingestEndpointUrls: string[];
```

- *Type:* string[]

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: OsisPipelineLogPublishingOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a>

---

##### `pipelineArn`<sup>Required</sup> <a name="pipelineArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn"></a>

```typescript
public readonly pipelineArn: string;
```

- *Type:* string

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: OsisPipelineResourcePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags"></a>

```typescript
public readonly tags: OsisPipelineTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a>

---

##### `vpcEndpoints`<sup>Required</sup> <a name="vpcEndpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints"></a>

```typescript
public readonly vpcEndpoints: OsisPipelineVpcEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a>

---

##### `vpcEndpointService`<sup>Required</sup> <a name="vpcEndpointService" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService"></a>

```typescript
public readonly vpcEndpointService: string;
```

- *Type:* string

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: OsisPipelineVpcOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a>

---

##### `bufferOptionsInput`<sup>Optional</sup> <a name="bufferOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput"></a>

```typescript
public readonly bufferOptionsInput: IResolvable | OsisPipelineBufferOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---

##### `encryptionAtRestOptionsInput`<sup>Optional</sup> <a name="encryptionAtRestOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput"></a>

```typescript
public readonly encryptionAtRestOptionsInput: IResolvable | OsisPipelineEncryptionAtRestOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---

##### `logPublishingOptionsInput`<sup>Optional</sup> <a name="logPublishingOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput"></a>

```typescript
public readonly logPublishingOptionsInput: IResolvable | OsisPipelineLogPublishingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---

##### `maxUnitsInput`<sup>Optional</sup> <a name="maxUnitsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput"></a>

```typescript
public readonly maxUnitsInput: number;
```

- *Type:* number

---

##### `minUnitsInput`<sup>Optional</sup> <a name="minUnitsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput"></a>

```typescript
public readonly minUnitsInput: number;
```

- *Type:* number

---

##### `pipelineConfigurationBodyInput`<sup>Optional</sup> <a name="pipelineConfigurationBodyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput"></a>

```typescript
public readonly pipelineConfigurationBodyInput: string;
```

- *Type:* string

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput"></a>

```typescript
public readonly pipelineNameInput: string;
```

- *Type:* string

---

##### `pipelineRoleArnInput`<sup>Optional</sup> <a name="pipelineRoleArnInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput"></a>

```typescript
public readonly pipelineRoleArnInput: string;
```

- *Type:* string

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput"></a>

```typescript
public readonly resourcePolicyInput: IResolvable | OsisPipelineResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OsisPipelineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput"></a>

```typescript
public readonly vpcOptionsInput: IResolvable | OsisPipelineVpcOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---

##### `maxUnits`<sup>Required</sup> <a name="maxUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits"></a>

```typescript
public readonly maxUnits: number;
```

- *Type:* number

---

##### `minUnits`<sup>Required</sup> <a name="minUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits"></a>

```typescript
public readonly minUnits: number;
```

- *Type:* number

---

##### `pipelineConfigurationBody`<sup>Required</sup> <a name="pipelineConfigurationBody" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody"></a>

```typescript
public readonly pipelineConfigurationBody: string;
```

- *Type:* string

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `pipelineRoleArn`<sup>Required</sup> <a name="pipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn"></a>

```typescript
public readonly pipelineRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsisPipelineBufferOptions <a name="OsisPipelineBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineBufferOptions: osisPipeline.OsisPipelineBufferOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled">persistentBufferEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether persistent buffering should be enabled. |

---

##### `persistentBufferEnabled`<sup>Optional</sup> <a name="persistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled"></a>

```typescript
public readonly persistentBufferEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether persistent buffering should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}

---

### OsisPipelineConfig <a name="OsisPipelineConfig" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineConfig: osisPipeline.OsisPipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits">maxUnits</a></code> | <code>number</code> | The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits">minUnits</a></code> | <code>number</code> | The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody">pipelineConfigurationBody</a></code> | <code>string</code> | The Data Prepper pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName">pipelineName</a></code> | <code>string</code> | Name of the OpenSearch Ingestion Service pipeline to create. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions">bufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | Key-value pairs to configure buffering. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions">encryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | Key-value pairs to configure encryption at rest. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | Key-value pairs to configure log publishing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn">pipelineRoleArn</a></code> | <code>string</code> | The Pipeline Role (ARN) for the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | Container for the values required to configure VPC access for the pipeline. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `maxUnits`<sup>Required</sup> <a name="maxUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits"></a>

```typescript
public readonly maxUnits: number;
```

- *Type:* number

The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}

---

##### `minUnits`<sup>Required</sup> <a name="minUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits"></a>

```typescript
public readonly minUnits: number;
```

- *Type:* number

The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}

---

##### `pipelineConfigurationBody`<sup>Required</sup> <a name="pipelineConfigurationBody" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody"></a>

```typescript
public readonly pipelineConfigurationBody: string;
```

- *Type:* string

The Data Prepper pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

Name of the OpenSearch Ingestion Service pipeline to create.

Pipeline names are unique across the pipelines owned by an account within an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}

---

##### `bufferOptions`<sup>Optional</sup> <a name="bufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions"></a>

```typescript
public readonly bufferOptions: OsisPipelineBufferOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

Key-value pairs to configure buffering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `encryptionAtRestOptions`<sup>Optional</sup> <a name="encryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions"></a>

```typescript
public readonly encryptionAtRestOptions: OsisPipelineEncryptionAtRestOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

Key-value pairs to configure encryption at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: OsisPipelineLogPublishingOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

Key-value pairs to configure log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `pipelineRoleArn`<sup>Optional</sup> <a name="pipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn"></a>

```typescript
public readonly pipelineRoleArn: string;
```

- *Type:* string

The Pipeline Role (ARN) for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#pipeline_role_arn OsisPipeline#pipeline_role_arn}

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: OsisPipelineResourcePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OsisPipelineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: OsisPipelineVpcOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

Container for the values required to configure VPC access for the pipeline.

If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

### OsisPipelineEncryptionAtRestOptions <a name="OsisPipelineEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineEncryptionAtRestOptions: osisPipeline.OsisPipelineEncryptionAtRestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The KMS key to use for encrypting data. By default an AWS owned key is used. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The KMS key to use for encrypting data. By default an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}

---

### OsisPipelineLogPublishingOptions <a name="OsisPipelineLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineLogPublishingOptions: osisPipeline.OsisPipelineLogPublishingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination">cloudwatchLogDestination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled">isLoggingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether logs should be published. |

---

##### `cloudwatchLogDestination`<sup>Optional</sup> <a name="cloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination"></a>

```typescript
public readonly cloudwatchLogDestination: OsisPipelineLogPublishingOptionsCloudwatchLogDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}

---

##### `isLoggingEnabled`<sup>Optional</sup> <a name="isLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled"></a>

```typescript
public readonly isLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether logs should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}

---

### OsisPipelineLogPublishingOptionsCloudwatchLogDestination <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineLogPublishingOptionsCloudwatchLogDestination: osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}.

---

### OsisPipelineResourcePolicy <a name="OsisPipelineResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineResourcePolicy: osisPipeline.OsisPipelineResourcePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}.

---

### OsisPipelineTags <a name="OsisPipelineTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineTags: osisPipeline.OsisPipelineTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#key OsisPipeline#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#value OsisPipeline#value}

---

### OsisPipelineVpcEndpoints <a name="OsisPipelineVpcEndpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineVpcEndpoints: osisPipeline.OsisPipelineVpcEndpoints = { ... }
```


### OsisPipelineVpcEndpointsVpcOptions <a name="OsisPipelineVpcEndpointsVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineVpcEndpointsVpcOptions: osisPipeline.OsisPipelineVpcEndpointsVpcOptions = { ... }
```


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions: osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions = { ... }
```


### OsisPipelineVpcOptions <a name="OsisPipelineVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineVpcOptions: osisPipeline.OsisPipelineVpcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | A list of security groups associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | A list of subnet IDs associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions">vpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | Options for attaching a VPC to the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement">vpcEndpointManagement</a></code> | <code>string</code> | Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

A list of security groups associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

A list of subnet IDs associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}

---

##### `vpcAttachmentOptions`<sup>Optional</sup> <a name="vpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions"></a>

```typescript
public readonly vpcAttachmentOptions: OsisPipelineVpcOptionsVpcAttachmentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

Options for attaching a VPC to the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#vpc_attachment_options OsisPipeline#vpc_attachment_options}

---

##### `vpcEndpointManagement`<sup>Optional</sup> <a name="vpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement"></a>

```typescript
public readonly vpcEndpointManagement: string;
```

- *Type:* string

Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#vpc_endpoint_management OsisPipeline#vpc_endpoint_management}

---

### OsisPipelineVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

const osisPipelineVpcOptionsVpcAttachmentOptions: osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc">attachToVpc</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the pipeline should be attached to the provided VPC. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs). |

---

##### `attachToVpc`<sup>Optional</sup> <a name="attachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc"></a>

```typescript
public readonly attachToVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the pipeline should be attached to the provided VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#attach_to_vpc OsisPipeline#attach_to_vpc}

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/osis_pipeline#cidr_block OsisPipeline#cidr_block}

---

## Classes <a name="Classes" id="Classes"></a>

### OsisPipelineBufferOptionsOutputReference <a name="OsisPipelineBufferOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineBufferOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled">resetPersistentBufferEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersistentBufferEnabled` <a name="resetPersistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled"></a>

```typescript
public resetPersistentBufferEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput">persistentBufferEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled">persistentBufferEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `persistentBufferEnabledInput`<sup>Optional</sup> <a name="persistentBufferEnabledInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput"></a>

```typescript
public readonly persistentBufferEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `persistentBufferEnabled`<sup>Required</sup> <a name="persistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled"></a>

```typescript
public readonly persistentBufferEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineBufferOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---


### OsisPipelineEncryptionAtRestOptionsOutputReference <a name="OsisPipelineEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineEncryptionAtRestOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---


### OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineLogPublishingOptionsCloudwatchLogDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---


### OsisPipelineLogPublishingOptionsOutputReference <a name="OsisPipelineLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineLogPublishingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination">putCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination">resetCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled">resetIsLoggingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogDestination` <a name="putCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination"></a>

```typescript
public putCloudwatchLogDestination(value: OsisPipelineLogPublishingOptionsCloudwatchLogDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---

##### `resetCloudwatchLogDestination` <a name="resetCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination"></a>

```typescript
public resetCloudwatchLogDestination(): void
```

##### `resetIsLoggingEnabled` <a name="resetIsLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled"></a>

```typescript
public resetIsLoggingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination">cloudwatchLogDestination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput">cloudwatchLogDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput">isLoggingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled">isLoggingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogDestination`<sup>Required</sup> <a name="cloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination"></a>

```typescript
public readonly cloudwatchLogDestination: OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a>

---

##### `cloudwatchLogDestinationInput`<sup>Optional</sup> <a name="cloudwatchLogDestinationInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput"></a>

```typescript
public readonly cloudwatchLogDestinationInput: IResolvable | OsisPipelineLogPublishingOptionsCloudwatchLogDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---

##### `isLoggingEnabledInput`<sup>Optional</sup> <a name="isLoggingEnabledInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput"></a>

```typescript
public readonly isLoggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isLoggingEnabled`<sup>Required</sup> <a name="isLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled"></a>

```typescript
public readonly isLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineLogPublishingOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---


### OsisPipelineResourcePolicyOutputReference <a name="OsisPipelineResourcePolicyOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineResourcePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineResourcePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---


### OsisPipelineTagsList <a name="OsisPipelineTagsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get"></a>

```typescript
public get(index: number): OsisPipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

---


### OsisPipelineTagsOutputReference <a name="OsisPipelineTagsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>

---


### OsisPipelineVpcEndpointsList <a name="OsisPipelineVpcEndpointsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineVpcEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get"></a>

```typescript
public get(index: number): OsisPipelineVpcEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OsisPipelineVpcEndpointsOutputReference <a name="OsisPipelineVpcEndpointsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineVpcEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: OsisPipelineVpcEndpointsVpcOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsisPipelineVpcEndpoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a>

---


### OsisPipelineVpcEndpointsVpcOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions">vpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement">vpcEndpointManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcAttachmentOptions`<sup>Required</sup> <a name="vpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```typescript
public readonly vpcAttachmentOptions: OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `vpcEndpointManagement`<sup>Required</sup> <a name="vpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```typescript
public readonly vpcEndpointManagement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsisPipelineVpcEndpointsVpcOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a>

---


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">attachToVpc</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachToVpc`<sup>Required</sup> <a name="attachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```typescript
public readonly attachToVpc: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a>

---


### OsisPipelineVpcOptionsOutputReference <a name="OsisPipelineVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions">putVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions">resetVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement">resetVpcEndpointManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcAttachmentOptions` <a name="putVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions"></a>

```typescript
public putVpcAttachmentOptions(value: OsisPipelineVpcOptionsVpcAttachmentOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcAttachmentOptions` <a name="resetVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions"></a>

```typescript
public resetVpcAttachmentOptions(): void
```

##### `resetVpcEndpointManagement` <a name="resetVpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement"></a>

```typescript
public resetVpcEndpointManagement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions">vpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput">vpcAttachmentOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput">vpcEndpointManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement">vpcEndpointManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcAttachmentOptions`<sup>Required</sup> <a name="vpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```typescript
public readonly vpcAttachmentOptions: OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcAttachmentOptionsInput`<sup>Optional</sup> <a name="vpcAttachmentOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput"></a>

```typescript
public readonly vpcAttachmentOptionsInput: IResolvable | OsisPipelineVpcOptionsVpcAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---

##### `vpcEndpointManagementInput`<sup>Optional</sup> <a name="vpcEndpointManagementInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput"></a>

```typescript
public readonly vpcEndpointManagementInput: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcEndpointManagement`<sup>Required</sup> <a name="vpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```typescript
public readonly vpcEndpointManagement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineVpcOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---


### OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { osisPipeline } from '@cdktn/provider-awscc'

new osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc">resetAttachToVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttachToVpc` <a name="resetAttachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc"></a>

```typescript
public resetAttachToVpc(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput">attachToVpcInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">attachToVpc</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachToVpcInput`<sup>Optional</sup> <a name="attachToVpcInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput"></a>

```typescript
public readonly attachToVpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `attachToVpc`<sup>Required</sup> <a name="attachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```typescript
public readonly attachToVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsisPipelineVpcOptionsVpcAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---



