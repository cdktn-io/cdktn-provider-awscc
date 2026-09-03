# `quicksightTopicV2` Submodule <a name="`quicksightTopicV2` Submodule" id="@cdktn/provider-awscc.quicksightTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTopicV2 <a name="QuicksightTopicV2" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2 awscc_quicksight_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2(scope: Construct, id: string, config?: QuicksightTopicV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config">QuicksightTopicV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config">QuicksightTopicV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions">putCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations">putDataSetRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets">putDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions">resetCustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations">resetDataSetRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets">resetDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns">resetFolderArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId">resetTopicId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomInstructions` <a name="putCustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions"></a>

```typescript
public putCustomInstructions(value: QuicksightTopicV2CustomInstructions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putCustomInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---

##### `putDataSetRelations` <a name="putDataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations"></a>

```typescript
public putDataSetRelations(value: IResolvable | QuicksightTopicV2DataSetRelations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSetRelations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

---

##### `putDataSets` <a name="putDataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets"></a>

```typescript
public putDataSets(value: IResolvable | QuicksightTopicV2DataSets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putDataSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | QuicksightTopicV2Permissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightTopicV2Tags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetCustomInstructions` <a name="resetCustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetCustomInstructions"></a>

```typescript
public resetCustomInstructions(): void
```

##### `resetDataSetRelations` <a name="resetDataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSetRelations"></a>

```typescript
public resetDataSetRelations(): void
```

##### `resetDataSets` <a name="resetDataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDataSets"></a>

```typescript
public resetDataSets(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFolderArns` <a name="resetFolderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetFolderArns"></a>

```typescript
public resetFolderArns(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTopicId` <a name="resetTopicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.resetTopicId"></a>

```typescript
public resetTopicId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

quicksightTopicV2.QuicksightTopicV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

quicksightTopicV2.QuicksightTopicV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

quicksightTopicV2.QuicksightTopicV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

quicksightTopicV2.QuicksightTopicV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightTopicV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightTopicV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions">customInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations">dataSetRelations</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets">dataSets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput">customInstructionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput">dataSetRelationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput">dataSetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput">folderArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput">permissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns">folderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customInstructions`<sup>Required</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructions"></a>

```typescript
public readonly customInstructions: QuicksightTopicV2CustomInstructionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference">QuicksightTopicV2CustomInstructionsOutputReference</a>

---

##### `dataSetRelations`<sup>Required</sup> <a name="dataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelations"></a>

```typescript
public readonly dataSetRelations: QuicksightTopicV2DataSetRelationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList">QuicksightTopicV2DataSetRelationsList</a>

---

##### `dataSets`<sup>Required</sup> <a name="dataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSets"></a>

```typescript
public readonly dataSets: QuicksightTopicV2DataSetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList">QuicksightTopicV2DataSetsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissions"></a>

```typescript
public readonly permissions: QuicksightTopicV2PermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList">QuicksightTopicV2PermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tags"></a>

```typescript
public readonly tags: QuicksightTopicV2TagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList">QuicksightTopicV2TagsList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `customInstructionsInput`<sup>Optional</sup> <a name="customInstructionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.customInstructionsInput"></a>

```typescript
public readonly customInstructionsInput: IResolvable | QuicksightTopicV2CustomInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---

##### `dataSetRelationsInput`<sup>Optional</sup> <a name="dataSetRelationsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetRelationsInput"></a>

```typescript
public readonly dataSetRelationsInput: IResolvable | QuicksightTopicV2DataSetRelations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

---

##### `dataSetsInput`<sup>Optional</sup> <a name="dataSetsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.dataSetsInput"></a>

```typescript
public readonly dataSetsInput: IResolvable | QuicksightTopicV2DataSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `folderArnsInput`<sup>Optional</sup> <a name="folderArnsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArnsInput"></a>

```typescript
public readonly folderArnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | QuicksightTopicV2Permissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightTopicV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `folderArns`<sup>Required</sup> <a name="folderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.folderArns"></a>

```typescript
public readonly folderArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTopicV2Config <a name="QuicksightTopicV2Config" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2Config: quicksightTopicV2.QuicksightTopicV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions">customInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations">dataSetRelations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets">dataSets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns">folderArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId">topicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#aws_account_id QuicksightTopicV2#aws_account_id}.

---

##### `customInstructions`<sup>Optional</sup> <a name="customInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.customInstructions"></a>

```typescript
public readonly customInstructions: QuicksightTopicV2CustomInstructions;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#custom_instructions QuicksightTopicV2#custom_instructions}.

---

##### `dataSetRelations`<sup>Optional</sup> <a name="dataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSetRelations"></a>

```typescript
public readonly dataSetRelations: IResolvable | QuicksightTopicV2DataSetRelations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_relations QuicksightTopicV2#data_set_relations}.

---

##### `dataSets`<sup>Optional</sup> <a name="dataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.dataSets"></a>

```typescript
public readonly dataSets: IResolvable | QuicksightTopicV2DataSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_sets QuicksightTopicV2#data_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#description QuicksightTopicV2#description}.

---

##### `folderArns`<sup>Optional</sup> <a name="folderArns" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.folderArns"></a>

```typescript
public readonly folderArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#folder_arns QuicksightTopicV2#folder_arns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#name QuicksightTopicV2#name}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | QuicksightTopicV2Permissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#permissions QuicksightTopicV2#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightTopicV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#tags QuicksightTopicV2#tags}.

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Config.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#topic_id QuicksightTopicV2#topic_id}.

---

### QuicksightTopicV2CustomInstructions <a name="QuicksightTopicV2CustomInstructions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2CustomInstructions: quicksightTopicV2.QuicksightTopicV2CustomInstructions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString">customInstructionsString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}. |

---

##### `customInstructionsString`<sup>Optional</sup> <a name="customInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions.property.customInstructionsString"></a>

```typescript
public readonly customInstructionsString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#custom_instructions_string QuicksightTopicV2#custom_instructions_string}.

---

### QuicksightTopicV2DataSetRelations <a name="QuicksightTopicV2DataSetRelations" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2DataSetRelations: quicksightTopicV2.QuicksightTopicV2DataSetRelations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left">left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right">right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}. |

---

##### `left`<sup>Optional</sup> <a name="left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.left"></a>

```typescript
public readonly left: QuicksightTopicV2DataSetRelationsLeft;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#left QuicksightTopicV2#left}.

---

##### `right`<sup>Optional</sup> <a name="right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations.property.right"></a>

```typescript
public readonly right: QuicksightTopicV2DataSetRelationsRight;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#right QuicksightTopicV2#right}.

---

### QuicksightTopicV2DataSetRelationsLeft <a name="QuicksightTopicV2DataSetRelationsLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2DataSetRelationsLeft: quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSetRelationsRight <a name="QuicksightTopicV2DataSetRelationsRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2DataSetRelationsRight: quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#column_names QuicksightTopicV2#column_names}.

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

### QuicksightTopicV2DataSets <a name="QuicksightTopicV2DataSets" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2DataSets: quicksightTopicV2.QuicksightTopicV2DataSets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName">dataSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}. |

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_arn QuicksightTopicV2#data_set_arn}.

---

##### `dataSetName`<sup>Optional</sup> <a name="dataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets.property.dataSetName"></a>

```typescript
public readonly dataSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#data_set_name QuicksightTopicV2#data_set_name}.

---

### QuicksightTopicV2Permissions <a name="QuicksightTopicV2Permissions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2Permissions: quicksightTopicV2.QuicksightTopicV2Permissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#actions QuicksightTopicV2#actions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#principal QuicksightTopicV2#principal}.

---

### QuicksightTopicV2Tags <a name="QuicksightTopicV2Tags" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

const quicksightTopicV2Tags: quicksightTopicV2.QuicksightTopicV2Tags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key">key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value">value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#key QuicksightTopicV2#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/quicksight_topic_v2#value QuicksightTopicV2#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightTopicV2CustomInstructionsOutputReference <a name="QuicksightTopicV2CustomInstructionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString">resetCustomInstructionsString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomInstructionsString` <a name="resetCustomInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.resetCustomInstructionsString"></a>

```typescript
public resetCustomInstructionsString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput">customInstructionsStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString">customInstructionsString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customInstructionsStringInput`<sup>Optional</sup> <a name="customInstructionsStringInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsStringInput"></a>

```typescript
public readonly customInstructionsStringInput: string;
```

- *Type:* string

---

##### `customInstructionsString`<sup>Required</sup> <a name="customInstructionsString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString"></a>

```typescript
public readonly customInstructionsString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2CustomInstructions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2CustomInstructions">QuicksightTopicV2CustomInstructions</a>

---


### QuicksightTopicV2DataSetRelationsLeftOutputReference <a name="QuicksightTopicV2DataSetRelationsLeftOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.resetDataSetArn"></a>

```typescript
public resetDataSetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArnInput"></a>

```typescript
public readonly dataSetArnInput: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2DataSetRelationsLeft;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---


### QuicksightTopicV2DataSetRelationsList <a name="QuicksightTopicV2DataSetRelationsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2DataSetRelationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get"></a>

```typescript
public get(index: number): QuicksightTopicV2DataSetRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2DataSetRelations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>[]

---


### QuicksightTopicV2DataSetRelationsOutputReference <a name="QuicksightTopicV2DataSetRelationsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft">putLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight">putRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft">resetLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight">resetRight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLeft` <a name="putLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft"></a>

```typescript
public putLeft(value: QuicksightTopicV2DataSetRelationsLeft): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---

##### `putRight` <a name="putRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight"></a>

```typescript
public putRight(value: QuicksightTopicV2DataSetRelationsRight): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---

##### `resetLeft` <a name="resetLeft" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetLeft"></a>

```typescript
public resetLeft(): void
```

##### `resetRight` <a name="resetRight" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.resetRight"></a>

```typescript
public resetRight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left">left</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right">right</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput">leftInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput">rightInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `left`<sup>Required</sup> <a name="left" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.left"></a>

```typescript
public readonly left: QuicksightTopicV2DataSetRelationsLeftOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeftOutputReference">QuicksightTopicV2DataSetRelationsLeftOutputReference</a>

---

##### `right`<sup>Required</sup> <a name="right" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.right"></a>

```typescript
public readonly right: QuicksightTopicV2DataSetRelationsRightOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference">QuicksightTopicV2DataSetRelationsRightOutputReference</a>

---

##### `leftInput`<sup>Optional</sup> <a name="leftInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.leftInput"></a>

```typescript
public readonly leftInput: IResolvable | QuicksightTopicV2DataSetRelationsLeft;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsLeft">QuicksightTopicV2DataSetRelationsLeft</a>

---

##### `rightInput`<sup>Optional</sup> <a name="rightInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.rightInput"></a>

```typescript
public readonly rightInput: IResolvable | QuicksightTopicV2DataSetRelationsRight;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2DataSetRelations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelations">QuicksightTopicV2DataSetRelations</a>

---


### QuicksightTopicV2DataSetRelationsRightOutputReference <a name="QuicksightTopicV2DataSetRelationsRightOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.resetDataSetArn"></a>

```typescript
public resetDataSetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArnInput"></a>

```typescript
public readonly dataSetArnInput: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2DataSetRelationsRight;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetRelationsRight">QuicksightTopicV2DataSetRelationsRight</a>

---


### QuicksightTopicV2DataSetsList <a name="QuicksightTopicV2DataSetsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2DataSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get"></a>

```typescript
public get(index: number): QuicksightTopicV2DataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2DataSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>[]

---


### QuicksightTopicV2DataSetsOutputReference <a name="QuicksightTopicV2DataSetsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName">resetDataSetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetArn"></a>

```typescript
public resetDataSetArn(): void
```

##### `resetDataSetName` <a name="resetDataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.resetDataSetName"></a>

```typescript
public resetDataSetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput">dataSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName">dataSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArnInput"></a>

```typescript
public readonly dataSetArnInput: string;
```

- *Type:* string

---

##### `dataSetNameInput`<sup>Optional</sup> <a name="dataSetNameInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetNameInput"></a>

```typescript
public readonly dataSetNameInput: string;
```

- *Type:* string

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

---

##### `dataSetName`<sup>Required</sup> <a name="dataSetName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.dataSetName"></a>

```typescript
public readonly dataSetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2DataSets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2DataSets">QuicksightTopicV2DataSets</a>

---


### QuicksightTopicV2PermissionsList <a name="QuicksightTopicV2PermissionsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2PermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get"></a>

```typescript
public get(index: number): QuicksightTopicV2PermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2Permissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>[]

---


### QuicksightTopicV2PermissionsOutputReference <a name="QuicksightTopicV2PermissionsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2PermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2Permissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Permissions">QuicksightTopicV2Permissions</a>

---


### QuicksightTopicV2TagsList <a name="QuicksightTopicV2TagsList" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2TagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get"></a>

```typescript
public get(index: number): QuicksightTopicV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>[]

---


### QuicksightTopicV2TagsOutputReference <a name="QuicksightTopicV2TagsOutputReference" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer"></a>

```typescript
import { quicksightTopicV2 } from '@cdktn/provider-awscc'

new quicksightTopicV2.QuicksightTopicV2TagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2TagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTopicV2Tags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTopicV2.QuicksightTopicV2Tags">QuicksightTopicV2Tags</a>

---



