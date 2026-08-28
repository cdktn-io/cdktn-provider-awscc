# `datasyncLocationHdfs` Submodule <a name="`datasyncLocationHdfs` Submodule" id="@cdktn/provider-awscc.datasyncLocationHdfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationHdfs <a name="DatasyncLocationHdfs" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs awscc_datasync_location_hdfs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfs(scope: Construct, id: string, config: DatasyncLocationHdfsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig">DatasyncLocationHdfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig">DatasyncLocationHdfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCmkSecretConfig">putCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCustomSecretConfig">putCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNodes">putNameNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration">putQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize">resetBlockSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCmkSecretConfig">resetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCustomSecretConfig">resetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab">resetKerberosKeytab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf">resetKerberosKrb5Conf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal">resetKerberosPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri">resetKmsKeyProviderUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration">resetQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser">resetSimpleUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmkSecretConfig` <a name="putCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCmkSecretConfig"></a>

```typescript
public putCmkSecretConfig(value: DatasyncLocationHdfsCmkSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

---

##### `putCustomSecretConfig` <a name="putCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCustomSecretConfig"></a>

```typescript
public putCustomSecretConfig(value: DatasyncLocationHdfsCustomSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

---

##### `putNameNodes` <a name="putNameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNodes"></a>

```typescript
public putNameNodes(value: IResolvable | DatasyncLocationHdfsNameNodes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNodes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>[]

---

##### `putQopConfiguration` <a name="putQopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration"></a>

```typescript
public putQopConfiguration(value: DatasyncLocationHdfsQopConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putTags"></a>

```typescript
public putTags(value: IResolvable | DatasyncLocationHdfsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>[]

---

##### `resetBlockSize` <a name="resetBlockSize" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize"></a>

```typescript
public resetBlockSize(): void
```

##### `resetCmkSecretConfig` <a name="resetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCmkSecretConfig"></a>

```typescript
public resetCmkSecretConfig(): void
```

##### `resetCustomSecretConfig` <a name="resetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetCustomSecretConfig"></a>

```typescript
public resetCustomSecretConfig(): void
```

##### `resetKerberosKeytab` <a name="resetKerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab"></a>

```typescript
public resetKerberosKeytab(): void
```

##### `resetKerberosKrb5Conf` <a name="resetKerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf"></a>

```typescript
public resetKerberosKrb5Conf(): void
```

##### `resetKerberosPrincipal` <a name="resetKerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal"></a>

```typescript
public resetKerberosPrincipal(): void
```

##### `resetKmsKeyProviderUri` <a name="resetKmsKeyProviderUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri"></a>

```typescript
public resetKmsKeyProviderUri(): void
```

##### `resetQopConfiguration` <a name="resetQopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration"></a>

```typescript
public resetQopConfiguration(): void
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor"></a>

```typescript
public resetReplicationFactor(): void
```

##### `resetSimpleUser` <a name="resetSimpleUser" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser"></a>

```typescript
public resetSimpleUser(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationHdfs resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatasyncLocationHdfs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationHdfs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationHdfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationHdfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference">DatasyncLocationHdfsCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference">DatasyncLocationHdfsCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference">DatasyncLocationHdfsManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodes">nameNodes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList">DatasyncLocationHdfsNameNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration">qopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList">DatasyncLocationHdfsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput">agentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput">blockSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfigInput">cmkSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfigInput">customSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput">kerberosKeytabInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput">kerberosKrb5ConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput">kerberosPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput">kmsKeyProviderUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodesInput">nameNodesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput">qopConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput">simpleUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize">blockSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab">kerberosKeytab</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri">kmsKeyProviderUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser">simpleUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DatasyncLocationHdfsCmkSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference">DatasyncLocationHdfsCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DatasyncLocationHdfsCustomSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference">DatasyncLocationHdfsCustomSecretConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.managedSecretConfig"></a>

```typescript
public readonly managedSecretConfig: DatasyncLocationHdfsManagedSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference">DatasyncLocationHdfsManagedSecretConfigOutputReference</a>

---

##### `nameNodes`<sup>Required</sup> <a name="nameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodes"></a>

```typescript
public readonly nameNodes: DatasyncLocationHdfsNameNodesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList">DatasyncLocationHdfsNameNodesList</a>

---

##### `qopConfiguration`<sup>Required</sup> <a name="qopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration"></a>

```typescript
public readonly qopConfiguration: DatasyncLocationHdfsQopConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags"></a>

```typescript
public readonly tags: DatasyncLocationHdfsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList">DatasyncLocationHdfsTagsList</a>

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput"></a>

```typescript
public readonly agentArnsInput: string[];
```

- *Type:* string[]

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `blockSizeInput`<sup>Optional</sup> <a name="blockSizeInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput"></a>

```typescript
public readonly blockSizeInput: number;
```

- *Type:* number

---

##### `cmkSecretConfigInput`<sup>Optional</sup> <a name="cmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.cmkSecretConfigInput"></a>

```typescript
public readonly cmkSecretConfigInput: IResolvable | DatasyncLocationHdfsCmkSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

---

##### `customSecretConfigInput`<sup>Optional</sup> <a name="customSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.customSecretConfigInput"></a>

```typescript
public readonly customSecretConfigInput: IResolvable | DatasyncLocationHdfsCustomSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

---

##### `kerberosKeytabInput`<sup>Optional</sup> <a name="kerberosKeytabInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput"></a>

```typescript
public readonly kerberosKeytabInput: string;
```

- *Type:* string

---

##### `kerberosKrb5ConfInput`<sup>Optional</sup> <a name="kerberosKrb5ConfInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput"></a>

```typescript
public readonly kerberosKrb5ConfInput: string;
```

- *Type:* string

---

##### `kerberosPrincipalInput`<sup>Optional</sup> <a name="kerberosPrincipalInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput"></a>

```typescript
public readonly kerberosPrincipalInput: string;
```

- *Type:* string

---

##### `kmsKeyProviderUriInput`<sup>Optional</sup> <a name="kmsKeyProviderUriInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput"></a>

```typescript
public readonly kmsKeyProviderUriInput: string;
```

- *Type:* string

---

##### `nameNodesInput`<sup>Optional</sup> <a name="nameNodesInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodesInput"></a>

```typescript
public readonly nameNodesInput: IResolvable | DatasyncLocationHdfsNameNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>[]

---

##### `qopConfigurationInput`<sup>Optional</sup> <a name="qopConfigurationInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput"></a>

```typescript
public readonly qopConfigurationInput: IResolvable | DatasyncLocationHdfsQopConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `simpleUserInput`<sup>Optional</sup> <a name="simpleUserInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput"></a>

```typescript
public readonly simpleUserInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatasyncLocationHdfsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `blockSize`<sup>Required</sup> <a name="blockSize" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize"></a>

```typescript
public readonly blockSize: number;
```

- *Type:* number

---

##### `kerberosKeytab`<sup>Required</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab"></a>

```typescript
public readonly kerberosKeytab: string;
```

- *Type:* string

---

##### `kerberosKrb5Conf`<sup>Required</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf"></a>

```typescript
public readonly kerberosKrb5Conf: string;
```

- *Type:* string

---

##### `kerberosPrincipal`<sup>Required</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal"></a>

```typescript
public readonly kerberosPrincipal: string;
```

- *Type:* string

---

##### `kmsKeyProviderUri`<sup>Required</sup> <a name="kmsKeyProviderUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri"></a>

```typescript
public readonly kmsKeyProviderUri: string;
```

- *Type:* string

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `simpleUser`<sup>Required</sup> <a name="simpleUser" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser"></a>

```typescript
public readonly simpleUser: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationHdfsCmkSecretConfig <a name="DatasyncLocationHdfsCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

const datasyncLocationHdfsCmkSecretConfig: datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#kms_key_arn DatasyncLocationHdfs#kms_key_arn}

---

### DatasyncLocationHdfsConfig <a name="DatasyncLocationHdfsConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

const datasyncLocationHdfsConfig: datasyncLocationHdfs.DatasyncLocationHdfsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns">agentArns</a></code> | <code>string[]</code> | ARN(s) of the agent(s) to use for an HDFS location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | The authentication mode used to determine identity of user. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNodes">nameNodes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>[]</code> | An array of Name Node(s) of the HDFS location. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize">blockSize</a></code> | <code>number</code> | Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab">kerberosKeytab</a></code> | <code>string</code> | The Base64 string representation of the Keytab file. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>string</code> | The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>string</code> | The unique identity, or principal, to which Kerberos can assign tickets. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri">kmsKeyProviderUri</a></code> | <code>string</code> | The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration">qopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | Configuration information for RPC Protection and Data Transfer Protection. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | Number of copies of each block that exists inside the HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser">simpleUser</a></code> | <code>string</code> | The user name that has read and write permissions on the specified HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

ARN(s) of the agent(s) to use for an HDFS location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

The authentication mode used to determine identity of user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}

---

##### `nameNodes`<sup>Required</sup> <a name="nameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNodes"></a>

```typescript
public readonly nameNodes: IResolvable | DatasyncLocationHdfsNameNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>[]

An array of Name Node(s) of the HDFS location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#name_nodes DatasyncLocationHdfs#name_nodes}

---

##### `blockSize`<sup>Optional</sup> <a name="blockSize" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize"></a>

```typescript
public readonly blockSize: number;
```

- *Type:* number

Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}

---

##### `cmkSecretConfig`<sup>Optional</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DatasyncLocationHdfsCmkSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#cmk_secret_config DatasyncLocationHdfs#cmk_secret_config}

---

##### `customSecretConfig`<sup>Optional</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DatasyncLocationHdfsCustomSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#custom_secret_config DatasyncLocationHdfs#custom_secret_config}

---

##### `kerberosKeytab`<sup>Optional</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab"></a>

```typescript
public readonly kerberosKeytab: string;
```

- *Type:* string

The Base64 string representation of the Keytab file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}

---

##### `kerberosKrb5Conf`<sup>Optional</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf"></a>

```typescript
public readonly kerberosKrb5Conf: string;
```

- *Type:* string

The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#kerberos_krb_5_conf DatasyncLocationHdfs#kerberos_krb_5_conf}

---

##### `kerberosPrincipal`<sup>Optional</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal"></a>

```typescript
public readonly kerberosPrincipal: string;
```

- *Type:* string

The unique identity, or principal, to which Kerberos can assign tickets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}

---

##### `kmsKeyProviderUri`<sup>Optional</sup> <a name="kmsKeyProviderUri" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri"></a>

```typescript
public readonly kmsKeyProviderUri: string;
```

- *Type:* string

The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}

---

##### `qopConfiguration`<sup>Optional</sup> <a name="qopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration"></a>

```typescript
public readonly qopConfiguration: DatasyncLocationHdfsQopConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

Configuration information for RPC Protection and Data Transfer Protection.

These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

Number of copies of each block that exists inside the HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}

---

##### `simpleUser`<sup>Optional</sup> <a name="simpleUser" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser"></a>

```typescript
public readonly simpleUser: string;
```

- *Type:* string

The user name that has read and write permissions on the specified HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatasyncLocationHdfsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}

---

### DatasyncLocationHdfsCustomSecretConfig <a name="DatasyncLocationHdfsCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

const datasyncLocationHdfsCustomSecretConfig: datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretArn">secretArn</a></code> | <code>string</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `secretAccessRoleArn`<sup>Optional</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#secret_access_role_arn DatasyncLocationHdfs#secret_access_role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#secret_arn DatasyncLocationHdfs#secret_arn}

---

### DatasyncLocationHdfsManagedSecretConfig <a name="DatasyncLocationHdfsManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

const datasyncLocationHdfsManagedSecretConfig: datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig = { ... }
```


### DatasyncLocationHdfsNameNodes <a name="DatasyncLocationHdfsNameNodes" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

const datasyncLocationHdfsNameNodes: datasyncLocationHdfs.DatasyncLocationHdfsNameNodes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.hostname">hostname</a></code> | <code>string</code> | The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.port">port</a></code> | <code>number</code> | The port on which the Name Node is listening on for client requests. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port on which the Name Node is listening on for client requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#port DatasyncLocationHdfs#port}

---

### DatasyncLocationHdfsQopConfiguration <a name="DatasyncLocationHdfsQopConfiguration" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

const datasyncLocationHdfsQopConfiguration: datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection">dataTransferProtection</a></code> | <code>string</code> | Configuration for Data Transfer Protection. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection">rpcProtection</a></code> | <code>string</code> | Configuration for RPC Protection. |

---

##### `dataTransferProtection`<sup>Optional</sup> <a name="dataTransferProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection"></a>

```typescript
public readonly dataTransferProtection: string;
```

- *Type:* string

Configuration for Data Transfer Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}

---

##### `rpcProtection`<sup>Optional</sup> <a name="rpcProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection"></a>

```typescript
public readonly rpcProtection: string;
```

- *Type:* string

Configuration for RPC Protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}

---

### DatasyncLocationHdfsTags <a name="DatasyncLocationHdfsTags" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

const datasyncLocationHdfsTags: datasyncLocationHdfs.DatasyncLocationHdfsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#key DatasyncLocationHdfs#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_hdfs#value DatasyncLocationHdfs#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationHdfsCmkSecretConfigOutputReference <a name="DatasyncLocationHdfsCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsCmkSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCmkSecretConfig">DatasyncLocationHdfsCmkSecretConfig</a>

---


### DatasyncLocationHdfsCustomSecretConfigOutputReference <a name="DatasyncLocationHdfsCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretAccessRoleArn">resetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretAccessRoleArn` <a name="resetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```typescript
public resetSecretAccessRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">secretAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessRoleArnInput`<sup>Optional</sup> <a name="secretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```typescript
public readonly secretAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsCustomSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsCustomSecretConfig">DatasyncLocationHdfsCustomSecretConfig</a>

---


### DatasyncLocationHdfsManagedSecretConfigOutputReference <a name="DatasyncLocationHdfsManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig">DatasyncLocationHdfsManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationHdfsManagedSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsManagedSecretConfig">DatasyncLocationHdfsManagedSecretConfig</a>

---


### DatasyncLocationHdfsNameNodesList <a name="DatasyncLocationHdfsNameNodesList" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.get"></a>

```typescript
public get(index: number): DatasyncLocationHdfsNameNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsNameNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>[]

---


### DatasyncLocationHdfsNameNodesOutputReference <a name="DatasyncLocationHdfsNameNodesOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsNameNodes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsNameNodes">DatasyncLocationHdfsNameNodes</a>

---


### DatasyncLocationHdfsQopConfigurationOutputReference <a name="DatasyncLocationHdfsQopConfigurationOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection">resetDataTransferProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection">resetRpcProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataTransferProtection` <a name="resetDataTransferProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection"></a>

```typescript
public resetDataTransferProtection(): void
```

##### `resetRpcProtection` <a name="resetRpcProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection"></a>

```typescript
public resetRpcProtection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput">dataTransferProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput">rpcProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection">dataTransferProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection">rpcProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTransferProtectionInput`<sup>Optional</sup> <a name="dataTransferProtectionInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput"></a>

```typescript
public readonly dataTransferProtectionInput: string;
```

- *Type:* string

---

##### `rpcProtectionInput`<sup>Optional</sup> <a name="rpcProtectionInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput"></a>

```typescript
public readonly rpcProtectionInput: string;
```

- *Type:* string

---

##### `dataTransferProtection`<sup>Required</sup> <a name="dataTransferProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection"></a>

```typescript
public readonly dataTransferProtection: string;
```

- *Type:* string

---

##### `rpcProtection`<sup>Required</sup> <a name="rpcProtection" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection"></a>

```typescript
public readonly rpcProtection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsQopConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---


### DatasyncLocationHdfsTagsList <a name="DatasyncLocationHdfsTagsList" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.get"></a>

```typescript
public get(index: number): DatasyncLocationHdfsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>[]

---


### DatasyncLocationHdfsTagsOutputReference <a name="DatasyncLocationHdfsTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationHdfs } from '@cdktn/provider-awscc'

new datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncLocationHdfsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncLocationHdfs.DatasyncLocationHdfsTags">DatasyncLocationHdfsTags</a>

---



