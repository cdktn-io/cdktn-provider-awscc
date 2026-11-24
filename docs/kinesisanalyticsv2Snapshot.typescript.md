# `kinesisanalyticsv2Snapshot` Submodule <a name="`kinesisanalyticsv2Snapshot` Submodule" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2Snapshot <a name="Kinesisanalyticsv2Snapshot" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot(scope: Construct, id: string, config: Kinesisanalyticsv2SnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig">Kinesisanalyticsv2SnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig">Kinesisanalyticsv2SnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration">putImportSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription">putSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetApplicationName">resetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetImportSourceConfiguration">resetImportSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotDescription">resetSnapshotDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotEncryptionConfigurationDescription">resetSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotFormat">resetSnapshotFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImportSourceConfiguration` <a name="putImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration"></a>

```typescript
public putImportSourceConfiguration(value: Kinesisanalyticsv2SnapshotImportSourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---

##### `putSnapshotEncryptionConfigurationDescription` <a name="putSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription"></a>

```typescript
public putSnapshotEncryptionConfigurationDescription(value: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags"></a>

```typescript
public putTags(value: IResolvable | Kinesisanalyticsv2SnapshotTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

---

##### `resetApplicationName` <a name="resetApplicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetApplicationName"></a>

```typescript
public resetApplicationName(): void
```

##### `resetImportSourceConfiguration` <a name="resetImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetImportSourceConfiguration"></a>

```typescript
public resetImportSourceConfiguration(): void
```

##### `resetSnapshotDescription` <a name="resetSnapshotDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotDescription"></a>

```typescript
public resetSnapshotDescription(): void
```

##### `resetSnapshotEncryptionConfigurationDescription` <a name="resetSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotEncryptionConfigurationDescription"></a>

```typescript
public resetSnapshotEncryptionConfigurationDescription(): void
```

##### `resetSnapshotFormat` <a name="resetSnapshotFormat" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotFormat"></a>

```typescript
public resetSnapshotFormat(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Kinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Kinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Kinesisanalyticsv2Snapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Kinesisanalyticsv2Snapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Kinesisanalyticsv2Snapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfiguration">importSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.runtimeEnvironment">runtimeEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp">snapshotCreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription">snapshotEncryptionConfigurationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiator">snapshotInitiator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation">snapshotInitiatorOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSizeInBytes">snapshotSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSourceDescription">snapshotSourceDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotStatus">snapshotStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList">Kinesisanalyticsv2SnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfigurationInput">importSourceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescriptionInput">snapshotDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescriptionInput">snapshotEncryptionConfigurationDescriptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormatInput">snapshotFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescription">snapshotDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormat">snapshotFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importSourceConfiguration`<sup>Required</sup> <a name="importSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfiguration"></a>

```typescript
public readonly importSourceConfiguration: Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a>

---

##### `runtimeEnvironment`<sup>Required</sup> <a name="runtimeEnvironment" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.runtimeEnvironment"></a>

```typescript
public readonly runtimeEnvironment: string;
```

- *Type:* string

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

---

##### `snapshotCreationTimestamp`<sup>Required</sup> <a name="snapshotCreationTimestamp" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp"></a>

```typescript
public readonly snapshotCreationTimestamp: string;
```

- *Type:* string

---

##### `snapshotEncryptionConfigurationDescription`<sup>Required</sup> <a name="snapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription"></a>

```typescript
public readonly snapshotEncryptionConfigurationDescription: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a>

---

##### `snapshotInitiator`<sup>Required</sup> <a name="snapshotInitiator" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiator"></a>

```typescript
public readonly snapshotInitiator: string;
```

- *Type:* string

---

##### `snapshotInitiatorOperation`<sup>Required</sup> <a name="snapshotInitiatorOperation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation"></a>

```typescript
public readonly snapshotInitiatorOperation: string;
```

- *Type:* string

---

##### `snapshotSizeInBytes`<sup>Required</sup> <a name="snapshotSizeInBytes" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSizeInBytes"></a>

```typescript
public readonly snapshotSizeInBytes: number;
```

- *Type:* number

---

##### `snapshotSourceDescription`<sup>Required</sup> <a name="snapshotSourceDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSourceDescription"></a>

```typescript
public readonly snapshotSourceDescription: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a>

---

##### `snapshotStatus`<sup>Required</sup> <a name="snapshotStatus" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotStatus"></a>

```typescript
public readonly snapshotStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tags"></a>

```typescript
public readonly tags: Kinesisanalyticsv2SnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList">Kinesisanalyticsv2SnapshotTagsList</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `importSourceConfigurationInput`<sup>Optional</sup> <a name="importSourceConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfigurationInput"></a>

```typescript
public readonly importSourceConfigurationInput: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---

##### `snapshotDescriptionInput`<sup>Optional</sup> <a name="snapshotDescriptionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescriptionInput"></a>

```typescript
public readonly snapshotDescriptionInput: string;
```

- *Type:* string

---

##### `snapshotEncryptionConfigurationDescriptionInput`<sup>Optional</sup> <a name="snapshotEncryptionConfigurationDescriptionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescriptionInput"></a>

```typescript
public readonly snapshotEncryptionConfigurationDescriptionInput: IResolvable | Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---

##### `snapshotFormatInput`<sup>Optional</sup> <a name="snapshotFormatInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormatInput"></a>

```typescript
public readonly snapshotFormatInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Kinesisanalyticsv2SnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `snapshotDescription`<sup>Required</sup> <a name="snapshotDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescription"></a>

```typescript
public readonly snapshotDescription: string;
```

- *Type:* string

---

##### `snapshotFormat`<sup>Required</sup> <a name="snapshotFormat" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormat"></a>

```typescript
public readonly snapshotFormat: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2SnapshotConfig <a name="Kinesisanalyticsv2SnapshotConfig" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotConfig: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | The customer-chosen name of the snapshot, unique within the account. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the Managed Service for Apache Flink application to snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.importSourceConfiguration">importSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | The Amazon S3 location and role to import the snapshot from, with ImportSnapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotDescription">snapshotDescription</a></code> | <code>string</code> | Optional customer-supplied description of the snapshot. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotEncryptionConfigurationDescription">snapshotEncryptionConfigurationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | The encryption of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotFormat">snapshotFormat</a></code> | <code>string</code> | The format of the snapshot (CANONICAL). |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]</code> | Tags to apply to the snapshot. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The customer-chosen name of the snapshot, unique within the account. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_name Kinesisanalyticsv2Snapshot#snapshot_name}

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the Managed Service for Apache Flink application to snapshot.

Used only at create time to select the source application; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#application_name Kinesisanalyticsv2Snapshot#application_name}

---

##### `importSourceConfiguration`<sup>Optional</sup> <a name="importSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.importSourceConfiguration"></a>

```typescript
public readonly importSourceConfiguration: Kinesisanalyticsv2SnapshotImportSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

The Amazon S3 location and role to import the snapshot from, with ImportSnapshot.

Used only at create time; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_source_configuration Kinesisanalyticsv2Snapshot#import_source_configuration}

---

##### `snapshotDescription`<sup>Optional</sup> <a name="snapshotDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotDescription"></a>

```typescript
public readonly snapshotDescription: string;
```

- *Type:* string

Optional customer-supplied description of the snapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_description Kinesisanalyticsv2Snapshot#snapshot_description}

---

##### `snapshotEncryptionConfigurationDescription`<sup>Optional</sup> <a name="snapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotEncryptionConfigurationDescription"></a>

```typescript
public readonly snapshotEncryptionConfigurationDescription: Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

The encryption of the snapshot.

Can be set only with ImportSourceConfiguration (sent as the ImportSnapshot DestinationEncryptionConfiguration; the AWS owned key when omitted). A snapshot taken from ApplicationName uses the application's encryption: DescribeSnapshot returns it for such snapshots, but it must not be set with ApplicationName. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_encryption_configuration_description Kinesisanalyticsv2Snapshot#snapshot_encryption_configuration_description}

---

##### `snapshotFormat`<sup>Optional</sup> <a name="snapshotFormat" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotFormat"></a>

```typescript
public readonly snapshotFormat: string;
```

- *Type:* string

The format of the snapshot (CANONICAL).

Sent to ImportSnapshot with ImportSourceConfiguration; with ApplicationName it may only be CANONICAL, the format CreateSnapshot produces. Returned by DescribeSnapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_format Kinesisanalyticsv2Snapshot#snapshot_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Kinesisanalyticsv2SnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

Tags to apply to the snapshot.

Applied at create time (with CreateSnapshot, or with TagResource right after ImportSnapshot) and updated in place with TagResource and UntagResource. Tag keys must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#tags Kinesisanalyticsv2Snapshot#tags}

---

### Kinesisanalyticsv2SnapshotImportSourceConfiguration <a name="Kinesisanalyticsv2SnapshotImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotImportSourceConfiguration: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.importRoleArn">importRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key). |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceEncryptionConfiguration">sourceEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | The encryption of the snapshot files in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceS3PrefixLocation">sourceS3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceType">sourceType</a></code> | <code>string</code> | The type of storage the snapshot is imported from. |

---

##### `importRoleArn`<sup>Optional</sup> <a name="importRoleArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.importRoleArn"></a>

```typescript
public readonly importRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_role_arn Kinesisanalyticsv2Snapshot#import_role_arn}

---

##### `sourceEncryptionConfiguration`<sup>Optional</sup> <a name="sourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceEncryptionConfiguration"></a>

```typescript
public readonly sourceEncryptionConfiguration: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

The encryption of the snapshot files in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_encryption_configuration Kinesisanalyticsv2Snapshot#source_encryption_configuration}

---

##### `sourceS3PrefixLocation`<sup>Optional</sup> <a name="sourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceS3PrefixLocation"></a>

```typescript
public readonly sourceS3PrefixLocation: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_s3_prefix_location Kinesisanalyticsv2Snapshot#source_s3_prefix_location}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

The type of storage the snapshot is imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_type Kinesisanalyticsv2Snapshot#source_type}

---

### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyId">keyId</a></code> | <code>string</code> | The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyType">keyType</a></code> | <code>string</code> | The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | The S3 key prefix. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#bucket_arn Kinesisanalyticsv2Snapshot#bucket_arn}

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

The S3 key prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_prefix Kinesisanalyticsv2Snapshot#key_prefix}

---

### Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription <a name="Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyId">keyId</a></code> | <code>string</code> | The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyType">keyType</a></code> | <code>string</code> | The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

### Kinesisanalyticsv2SnapshotSnapshotSourceDescription <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotSnapshotSourceDescription: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription = { ... }
```


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation = { ... }
```


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription = { ... }
```


### Kinesisanalyticsv2SnapshotTags <a name="Kinesisanalyticsv2SnapshotTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

const kinesisanalyticsv2SnapshotTags: kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key Kinesisanalyticsv2Snapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#value Kinesisanalyticsv2Snapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration">putSourceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation">putSourceS3PrefixLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetImportRoleArn">resetImportRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceEncryptionConfiguration">resetSourceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceS3PrefixLocation">resetSourceS3PrefixLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceType">resetSourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceEncryptionConfiguration` <a name="putSourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration"></a>

```typescript
public putSourceEncryptionConfiguration(value: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---

##### `putSourceS3PrefixLocation` <a name="putSourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation"></a>

```typescript
public putSourceS3PrefixLocation(value: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---

##### `resetImportRoleArn` <a name="resetImportRoleArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetImportRoleArn"></a>

```typescript
public resetImportRoleArn(): void
```

##### `resetSourceEncryptionConfiguration` <a name="resetSourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceEncryptionConfiguration"></a>

```typescript
public resetSourceEncryptionConfiguration(): void
```

##### `resetSourceS3PrefixLocation` <a name="resetSourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceS3PrefixLocation"></a>

```typescript
public resetSourceS3PrefixLocation(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceType"></a>

```typescript
public resetSourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration">sourceEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation">sourceS3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArnInput">importRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfigurationInput">sourceEncryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocationInput">sourceS3PrefixLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn">importRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceEncryptionConfiguration`<sup>Required</sup> <a name="sourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration"></a>

```typescript
public readonly sourceEncryptionConfiguration: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a>

---

##### `sourceS3PrefixLocation`<sup>Required</sup> <a name="sourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation"></a>

```typescript
public readonly sourceS3PrefixLocation: Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a>

---

##### `importRoleArnInput`<sup>Optional</sup> <a name="importRoleArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArnInput"></a>

```typescript
public readonly importRoleArnInput: string;
```

- *Type:* string

---

##### `sourceEncryptionConfigurationInput`<sup>Optional</sup> <a name="sourceEncryptionConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfigurationInput"></a>

```typescript
public readonly sourceEncryptionConfigurationInput: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---

##### `sourceS3PrefixLocationInput`<sup>Optional</sup> <a name="sourceS3PrefixLocationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocationInput"></a>

```typescript
public readonly sourceS3PrefixLocationInput: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `importRoleArn`<sup>Required</sup> <a name="importRoleArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn"></a>

```typescript
public readonly importRoleArn: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---


### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---


### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetBucketArn"></a>

```typescript
public resetBucketArn(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArnInput"></a>

```typescript
public readonly bucketArnInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---


### Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation">s3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription">sourceApplicationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3PrefixLocation`<sup>Required</sup> <a name="s3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation"></a>

```typescript
public readonly s3PrefixLocation: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a>

---

##### `sourceApplicationDescription`<sup>Required</sup> <a name="sourceApplicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription"></a>

```typescript
public readonly sourceApplicationDescription: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Kinesisanalyticsv2SnapshotSnapshotSourceDescription;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescription</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn">bucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp">applicationCreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId">applicationVersionId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationCreationTimestamp`<sup>Required</sup> <a name="applicationCreationTimestamp" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp"></a>

```typescript
public readonly applicationCreationTimestamp: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `applicationVersionId`<sup>Required</sup> <a name="applicationVersionId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId"></a>

```typescript
public readonly applicationVersionId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription;
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a>

---


### Kinesisanalyticsv2SnapshotTagsList <a name="Kinesisanalyticsv2SnapshotTagsList" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get"></a>

```typescript
public get(index: number): Kinesisanalyticsv2SnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Kinesisanalyticsv2SnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

---


### Kinesisanalyticsv2SnapshotTagsOutputReference <a name="Kinesisanalyticsv2SnapshotTagsOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2Snapshot } from '@cdktn/provider-awscc'

new kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Kinesisanalyticsv2SnapshotTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>

---



