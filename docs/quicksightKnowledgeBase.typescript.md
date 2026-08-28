# `quicksightKnowledgeBase` Submodule <a name="`quicksightKnowledgeBase` Submodule" id="@cdktn/provider-awscc.quicksightKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightKnowledgeBase <a name="QuicksightKnowledgeBase" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base awscc_quicksight_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBase(scope: Construct, id: string, config: QuicksightKnowledgeBaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig">QuicksightKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig">QuicksightKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration">putAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration">putKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration">putMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetAccessControlConfiguration">resetAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetIsEmailNotificationOptedForIngestionFailures">resetIsEmailNotificationOptedForIngestionFailures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetMediaExtractionConfiguration">resetMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPrimaryOwnerArn">resetPrimaryOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessControlConfiguration` <a name="putAccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration"></a>

```typescript
public putAccessControlConfiguration(value: QuicksightKnowledgeBaseAccessControlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

---

##### `putKnowledgeBaseConfiguration` <a name="putKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration"></a>

```typescript
public putKnowledgeBaseConfiguration(value: QuicksightKnowledgeBaseKnowledgeBaseConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---

##### `putMediaExtractionConfiguration` <a name="putMediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration"></a>

```typescript
public putMediaExtractionConfiguration(value: QuicksightKnowledgeBaseMediaExtractionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | QuicksightKnowledgeBasePermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightKnowledgeBaseTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>[]

---

##### `resetAccessControlConfiguration` <a name="resetAccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetAccessControlConfiguration"></a>

```typescript
public resetAccessControlConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsEmailNotificationOptedForIngestionFailures` <a name="resetIsEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetIsEmailNotificationOptedForIngestionFailures"></a>

```typescript
public resetIsEmailNotificationOptedForIngestionFailures(): void
```

##### `resetMediaExtractionConfiguration` <a name="resetMediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetMediaExtractionConfiguration"></a>

```typescript
public resetMediaExtractionConfiguration(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrimaryOwnerArn` <a name="resetPrimaryOwnerArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPrimaryOwnerArn"></a>

```typescript
public resetPrimaryOwnerArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfiguration">accessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference">QuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.documentCount">documentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfiguration">knowledgeBaseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseSizeBytes">knowledgeBaseSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfiguration">mediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList">QuicksightKnowledgeBasePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerUsername">primaryOwnerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList">QuicksightKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfigurationInput">accessControlConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailuresInput">isEmailNotificationOptedForIngestionFailuresInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfigurationInput">knowledgeBaseConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfigurationInput">mediaExtractionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissionsInput">permissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArnInput">primaryOwnerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures">isEmailNotificationOptedForIngestionFailures</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArn">primaryOwnerArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessControlConfiguration`<sup>Required</sup> <a name="accessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfiguration"></a>

```typescript
public readonly accessControlConfiguration: QuicksightKnowledgeBaseAccessControlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference">QuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `documentCount`<sup>Required</sup> <a name="documentCount" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.documentCount"></a>

```typescript
public readonly documentCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `knowledgeBaseConfiguration`<sup>Required</sup> <a name="knowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```typescript
public readonly knowledgeBaseConfiguration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a>

---

##### `knowledgeBaseSizeBytes`<sup>Required</sup> <a name="knowledgeBaseSizeBytes" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseSizeBytes"></a>

```typescript
public readonly knowledgeBaseSizeBytes: number;
```

- *Type:* number

---

##### `mediaExtractionConfiguration`<sup>Required</sup> <a name="mediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfiguration"></a>

```typescript
public readonly mediaExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissions"></a>

```typescript
public readonly permissions: QuicksightKnowledgeBasePermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList">QuicksightKnowledgeBasePermissionsList</a>

---

##### `primaryOwnerUsername`<sup>Required</sup> <a name="primaryOwnerUsername" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerUsername"></a>

```typescript
public readonly primaryOwnerUsername: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tags"></a>

```typescript
public readonly tags: QuicksightKnowledgeBaseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList">QuicksightKnowledgeBaseTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accessControlConfigurationInput`<sup>Optional</sup> <a name="accessControlConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfigurationInput"></a>

```typescript
public readonly accessControlConfigurationInput: IResolvable | QuicksightKnowledgeBaseAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArnInput"></a>

```typescript
public readonly dataSourceArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isEmailNotificationOptedForIngestionFailuresInput`<sup>Optional</sup> <a name="isEmailNotificationOptedForIngestionFailuresInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailuresInput"></a>

```typescript
public readonly isEmailNotificationOptedForIngestionFailuresInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `knowledgeBaseConfigurationInput`<sup>Optional</sup> <a name="knowledgeBaseConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfigurationInput"></a>

```typescript
public readonly knowledgeBaseConfigurationInput: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseIdInput"></a>

```typescript
public readonly knowledgeBaseIdInput: string;
```

- *Type:* string

---

##### `mediaExtractionConfigurationInput`<sup>Optional</sup> <a name="mediaExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfigurationInput"></a>

```typescript
public readonly mediaExtractionConfigurationInput: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | QuicksightKnowledgeBasePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>[]

---

##### `primaryOwnerArnInput`<sup>Optional</sup> <a name="primaryOwnerArnInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArnInput"></a>

```typescript
public readonly primaryOwnerArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightKnowledgeBaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEmailNotificationOptedForIngestionFailures`<sup>Required</sup> <a name="isEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures"></a>

```typescript
public readonly isEmailNotificationOptedForIngestionFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryOwnerArn`<sup>Required</sup> <a name="primaryOwnerArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArn"></a>

```typescript
public readonly primaryOwnerArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightKnowledgeBaseAccessControlConfiguration <a name="QuicksightKnowledgeBaseAccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseAccessControlConfiguration: quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.property.isAclEnabled">isAclEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_acl_enabled QuicksightKnowledgeBase#is_acl_enabled}. |

---

##### `isAclEnabled`<sup>Optional</sup> <a name="isAclEnabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.property.isAclEnabled"></a>

```typescript
public readonly isAclEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_acl_enabled QuicksightKnowledgeBase#is_acl_enabled}.

---

### QuicksightKnowledgeBaseConfig <a name="QuicksightKnowledgeBaseConfig" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseConfig: quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseConfiguration">knowledgeBaseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.accessControlConfiguration">accessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.isEmailNotificationOptedForIngestionFailures">isEmailNotificationOptedForIngestionFailures</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.mediaExtractionConfiguration">mediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.primaryOwnerArn">primaryOwnerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}.

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}.

---

##### `knowledgeBaseConfiguration`<sup>Required</sup> <a name="knowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseConfiguration"></a>

```typescript
public readonly knowledgeBaseConfiguration: QuicksightKnowledgeBaseKnowledgeBaseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}.

---

##### `accessControlConfiguration`<sup>Optional</sup> <a name="accessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.accessControlConfiguration"></a>

```typescript
public readonly accessControlConfiguration: QuicksightKnowledgeBaseAccessControlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}.

---

##### `isEmailNotificationOptedForIngestionFailures`<sup>Optional</sup> <a name="isEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.isEmailNotificationOptedForIngestionFailures"></a>

```typescript
public readonly isEmailNotificationOptedForIngestionFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}.

---

##### `mediaExtractionConfiguration`<sup>Optional</sup> <a name="mediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.mediaExtractionConfiguration"></a>

```typescript
public readonly mediaExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | QuicksightKnowledgeBasePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}.

---

##### `primaryOwnerArn`<sup>Optional</sup> <a name="primaryOwnerArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.primaryOwnerArn"></a>

```typescript
public readonly primaryOwnerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightKnowledgeBaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}.

---

### QuicksightKnowledgeBaseKnowledgeBaseConfiguration <a name="QuicksightKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseKnowledgeBaseConfiguration: quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template_configuration QuicksightKnowledgeBase#template_configuration}. |

---

##### `templateConfiguration`<sup>Optional</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template_configuration QuicksightKnowledgeBase#template_configuration}.

---

### QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration: quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.property.template">template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template QuicksightKnowledgeBase#template}. |

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template QuicksightKnowledgeBase#template}.

---

### QuicksightKnowledgeBaseMediaExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseMediaExtractionConfiguration: quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.audioExtractionConfiguration">audioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_configuration QuicksightKnowledgeBase#audio_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.imageExtractionConfiguration">imageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_configuration QuicksightKnowledgeBase#image_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.videoExtractionConfiguration">videoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_configuration QuicksightKnowledgeBase#video_extraction_configuration}. |

---

##### `audioExtractionConfiguration`<sup>Optional</sup> <a name="audioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.audioExtractionConfiguration"></a>

```typescript
public readonly audioExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_configuration QuicksightKnowledgeBase#audio_extraction_configuration}.

---

##### `imageExtractionConfiguration`<sup>Optional</sup> <a name="imageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.imageExtractionConfiguration"></a>

```typescript
public readonly imageExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_configuration QuicksightKnowledgeBase#image_extraction_configuration}.

---

##### `videoExtractionConfiguration`<sup>Optional</sup> <a name="videoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.videoExtractionConfiguration"></a>

```typescript
public readonly videoExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_configuration QuicksightKnowledgeBase#video_extraction_configuration}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration: quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus">audioExtractionStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_status QuicksightKnowledgeBase#audio_extraction_status}. |

---

##### `audioExtractionStatus`<sup>Optional</sup> <a name="audioExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus"></a>

```typescript
public readonly audioExtractionStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_status QuicksightKnowledgeBase#audio_extraction_status}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration: quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus">imageExtractionStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_status QuicksightKnowledgeBase#image_extraction_status}. |

---

##### `imageExtractionStatus`<sup>Optional</sup> <a name="imageExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus"></a>

```typescript
public readonly imageExtractionStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_status QuicksightKnowledgeBase#image_extraction_status}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration: quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus">videoExtractionStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_status QuicksightKnowledgeBase#video_extraction_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionType">videoExtractionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_type QuicksightKnowledgeBase#video_extraction_type}. |

---

##### `videoExtractionStatus`<sup>Optional</sup> <a name="videoExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus"></a>

```typescript
public readonly videoExtractionStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_status QuicksightKnowledgeBase#video_extraction_status}.

---

##### `videoExtractionType`<sup>Optional</sup> <a name="videoExtractionType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionType"></a>

```typescript
public readonly videoExtractionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_type QuicksightKnowledgeBase#video_extraction_type}.

---

### QuicksightKnowledgeBasePermissions <a name="QuicksightKnowledgeBasePermissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBasePermissions: quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.actions">actions</a></code> | <code>string[]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.principal">principal</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the principal. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#resource QuicksightKnowledgeBase#resource}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#actions QuicksightKnowledgeBase#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
            following:</p>
         <ul>
            <li>
               <p>The ARN of an Amazon Quick user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
               <p>The ARN of an Amazon Quick user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#principal QuicksightKnowledgeBase#principal}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#resource QuicksightKnowledgeBase#resource}.

---

### QuicksightKnowledgeBaseTags <a name="QuicksightKnowledgeBaseTags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

const quicksightKnowledgeBaseTags: quicksightKnowledgeBase.QuicksightKnowledgeBaseTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.key">key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.value">value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#key QuicksightKnowledgeBase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#value QuicksightKnowledgeBase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightKnowledgeBaseAccessControlConfigurationOutputReference <a name="QuicksightKnowledgeBaseAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resetIsAclEnabled">resetIsAclEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsAclEnabled` <a name="resetIsAclEnabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resetIsAclEnabled"></a>

```typescript
public resetIsAclEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabledInput">isAclEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled">isAclEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isAclEnabledInput`<sup>Optional</sup> <a name="isAclEnabledInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabledInput"></a>

```typescript
public readonly isAclEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isAclEnabled`<sup>Required</sup> <a name="isAclEnabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled"></a>

```typescript
public readonly isAclEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

---


### QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration">putTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetTemplateConfiguration">resetTemplateConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTemplateConfiguration` <a name="putTemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration"></a>

```typescript
public putTemplateConfiguration(value: QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---

##### `resetTemplateConfiguration` <a name="resetTemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetTemplateConfiguration"></a>

```typescript
public resetTemplateConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfigurationInput">templateConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a>

---

##### `templateConfigurationInput`<sup>Optional</sup> <a name="templateConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfigurationInput"></a>

```typescript
public readonly templateConfigurationInput: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---


### QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTemplate` <a name="resetTemplate" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resetTemplate"></a>

```typescript
public resetTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus">resetAudioExtractionStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioExtractionStatus` <a name="resetAudioExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus"></a>

```typescript
public resetAudioExtractionStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput">audioExtractionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">audioExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExtractionStatusInput`<sup>Optional</sup> <a name="audioExtractionStatusInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput"></a>

```typescript
public readonly audioExtractionStatusInput: string;
```

- *Type:* string

---

##### `audioExtractionStatus`<sup>Required</sup> <a name="audioExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```typescript
public readonly audioExtractionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus">resetImageExtractionStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageExtractionStatus` <a name="resetImageExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus"></a>

```typescript
public resetImageExtractionStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput">imageExtractionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">imageExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageExtractionStatusInput`<sup>Optional</sup> <a name="imageExtractionStatusInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput"></a>

```typescript
public readonly imageExtractionStatusInput: string;
```

- *Type:* string

---

##### `imageExtractionStatus`<sup>Required</sup> <a name="imageExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```typescript
public readonly imageExtractionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration">putAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration">putImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration">putVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration">resetAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration">resetImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration">resetVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioExtractionConfiguration` <a name="putAudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration"></a>

```typescript
public putAudioExtractionConfiguration(value: QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `putImageExtractionConfiguration` <a name="putImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration"></a>

```typescript
public putImageExtractionConfiguration(value: QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `putVideoExtractionConfiguration` <a name="putVideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration"></a>

```typescript
public putVideoExtractionConfiguration(value: QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `resetAudioExtractionConfiguration` <a name="resetAudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration"></a>

```typescript
public resetAudioExtractionConfiguration(): void
```

##### `resetImageExtractionConfiguration` <a name="resetImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration"></a>

```typescript
public resetImageExtractionConfiguration(): void
```

##### `resetVideoExtractionConfiguration` <a name="resetVideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration"></a>

```typescript
public resetVideoExtractionConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">audioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">imageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">videoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput">audioExtractionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput">imageExtractionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput">videoExtractionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExtractionConfiguration`<sup>Required</sup> <a name="audioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```typescript
public readonly audioExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `imageExtractionConfiguration`<sup>Required</sup> <a name="imageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```typescript
public readonly imageExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `videoExtractionConfiguration`<sup>Required</sup> <a name="videoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```typescript
public readonly videoExtractionConfiguration: QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `audioExtractionConfigurationInput`<sup>Optional</sup> <a name="audioExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput"></a>

```typescript
public readonly audioExtractionConfigurationInput: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `imageExtractionConfigurationInput`<sup>Optional</sup> <a name="imageExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput"></a>

```typescript
public readonly imageExtractionConfigurationInput: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `videoExtractionConfigurationInput`<sup>Optional</sup> <a name="videoExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput"></a>

```typescript
public readonly videoExtractionConfigurationInput: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus">resetVideoExtractionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionType">resetVideoExtractionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVideoExtractionStatus` <a name="resetVideoExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus"></a>

```typescript
public resetVideoExtractionStatus(): void
```

##### `resetVideoExtractionType` <a name="resetVideoExtractionType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionType"></a>

```typescript
public resetVideoExtractionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput">videoExtractionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionTypeInput">videoExtractionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">videoExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType">videoExtractionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `videoExtractionStatusInput`<sup>Optional</sup> <a name="videoExtractionStatusInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput"></a>

```typescript
public readonly videoExtractionStatusInput: string;
```

- *Type:* string

---

##### `videoExtractionTypeInput`<sup>Optional</sup> <a name="videoExtractionTypeInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionTypeInput"></a>

```typescript
public readonly videoExtractionTypeInput: string;
```

- *Type:* string

---

##### `videoExtractionStatus`<sup>Required</sup> <a name="videoExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```typescript
public readonly videoExtractionStatus: string;
```

- *Type:* string

---

##### `videoExtractionType`<sup>Required</sup> <a name="videoExtractionType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType"></a>

```typescript
public readonly videoExtractionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### QuicksightKnowledgeBasePermissionsList <a name="QuicksightKnowledgeBasePermissionsList" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get"></a>

```typescript
public get(index: number): QuicksightKnowledgeBasePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBasePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>[]

---


### QuicksightKnowledgeBasePermissionsOutputReference <a name="QuicksightKnowledgeBasePermissionsOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetResource` <a name="resetResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBasePermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions">QuicksightKnowledgeBasePermissions</a>

---


### QuicksightKnowledgeBaseTagsList <a name="QuicksightKnowledgeBaseTagsList" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get"></a>

```typescript
public get(index: number): QuicksightKnowledgeBaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>[]

---


### QuicksightKnowledgeBaseTagsOutputReference <a name="QuicksightKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer"></a>

```typescript
import { quicksightKnowledgeBase } from '@cdktn/provider-awscc'

new quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightKnowledgeBaseTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags">QuicksightKnowledgeBaseTags</a>

---



