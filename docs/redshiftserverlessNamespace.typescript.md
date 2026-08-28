# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktn/provider-awscc.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace awscc_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

new redshiftserverlessNamespace.RedshiftserverlessNamespace(scope: Construct, id: string, config: RedshiftserverlessNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations">putSnapshotCopyConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId">resetAdminPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">resetAdminUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">resetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName">resetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod">resetFinalSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">resetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword">resetManageAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy">resetNamespaceResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn">resetRedshiftIdcApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations">resetSnapshotCopyConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSnapshotCopyConfigurations` <a name="putSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations"></a>

```typescript
public putSnapshotCopyConfigurations(value: IResolvable | RedshiftserverlessNamespaceSnapshotCopyConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags"></a>

```typescript
public putTags(value: IResolvable | RedshiftserverlessNamespaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>[]

---

##### `resetAdminPasswordSecretKmsKeyId` <a name="resetAdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId"></a>

```typescript
public resetAdminPasswordSecretKmsKeyId(): void
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```typescript
public resetAdminUsername(): void
```

##### `resetAdminUserPassword` <a name="resetAdminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```typescript
public resetAdminUserPassword(): void
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDefaultIamRoleArn` <a name="resetDefaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```typescript
public resetDefaultIamRoleArn(): void
```

##### `resetFinalSnapshotName` <a name="resetFinalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName"></a>

```typescript
public resetFinalSnapshotName(): void
```

##### `resetFinalSnapshotRetentionPeriod` <a name="resetFinalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod"></a>

```typescript
public resetFinalSnapshotRetentionPeriod(): void
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```typescript
public resetIamRoles(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLogExports` <a name="resetLogExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```typescript
public resetLogExports(): void
```

##### `resetManageAdminPassword` <a name="resetManageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword"></a>

```typescript
public resetManageAdminPassword(): void
```

##### `resetNamespaceResourcePolicy` <a name="resetNamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy"></a>

```typescript
public resetNamespaceResourcePolicy(): void
```

##### `resetRedshiftIdcApplicationArn` <a name="resetRedshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn"></a>

```typescript
public resetRedshiftIdcApplicationArn(): void
```

##### `resetSnapshotCopyConfigurations` <a name="resetSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations"></a>

```typescript
public resetSnapshotCopyConfigurations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftserverlessNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace">namespace</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations">snapshotCopyConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput">adminPasswordSecretKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">adminUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">defaultIamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput">finalSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput">finalSnapshotRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">iamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">logExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput">manageAdminPasswordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput">namespaceResourcePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput">redshiftIdcApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput">snapshotCopyConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">adminUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName">finalSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod">finalSnapshotRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">logExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword">manageAdminPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace"></a>

```typescript
public readonly namespace: RedshiftserverlessNamespaceNamespaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a>

---

##### `snapshotCopyConfigurations`<sup>Required</sup> <a name="snapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations"></a>

```typescript
public readonly snapshotCopyConfigurations: RedshiftserverlessNamespaceSnapshotCopyConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```typescript
public readonly tags: RedshiftserverlessNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a>

---

##### `adminPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="adminPasswordSecretKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput"></a>

```typescript
public readonly adminPasswordSecretKmsKeyIdInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `adminUserPasswordInput`<sup>Optional</sup> <a name="adminUserPasswordInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```typescript
public readonly adminUserPasswordInput: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `defaultIamRoleArnInput`<sup>Optional</sup> <a name="defaultIamRoleArnInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```typescript
public readonly defaultIamRoleArnInput: string;
```

- *Type:* string

---

##### `finalSnapshotNameInput`<sup>Optional</sup> <a name="finalSnapshotNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput"></a>

```typescript
public readonly finalSnapshotNameInput: string;
```

- *Type:* string

---

##### `finalSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="finalSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput"></a>

```typescript
public readonly finalSnapshotRetentionPeriodInput: number;
```

- *Type:* number

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```typescript
public readonly iamRolesInput: string[];
```

- *Type:* string[]

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logExportsInput`<sup>Optional</sup> <a name="logExportsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```typescript
public readonly logExportsInput: string[];
```

- *Type:* string[]

---

##### `manageAdminPasswordInput`<sup>Optional</sup> <a name="manageAdminPasswordInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput"></a>

```typescript
public readonly manageAdminPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `namespaceResourcePolicyInput`<sup>Optional</sup> <a name="namespaceResourcePolicyInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput"></a>

```typescript
public readonly namespaceResourcePolicyInput: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationArnInput`<sup>Optional</sup> <a name="redshiftIdcApplicationArnInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput"></a>

```typescript
public readonly redshiftIdcApplicationArnInput: string;
```

- *Type:* string

---

##### `snapshotCopyConfigurationsInput`<sup>Optional</sup> <a name="snapshotCopyConfigurationsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput"></a>

```typescript
public readonly snapshotCopyConfigurationsInput: IResolvable | RedshiftserverlessNamespaceSnapshotCopyConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RedshiftserverlessNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>[]

---

##### `adminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```typescript
public readonly adminPasswordSecretKmsKeyId: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```typescript
public readonly adminUserPassword: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

---

##### `finalSnapshotName`<sup>Required</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName"></a>

```typescript
public readonly finalSnapshotName: string;
```

- *Type:* string

---

##### `finalSnapshotRetentionPeriod`<sup>Required</sup> <a name="finalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod"></a>

```typescript
public readonly finalSnapshotRetentionPeriod: number;
```

- *Type:* number

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

---

##### `manageAdminPassword`<sup>Required</sup> <a name="manageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword"></a>

```typescript
public readonly manageAdminPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `namespaceResourcePolicy`<sup>Required</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy"></a>

```typescript
public readonly namespaceResourcePolicy: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationArn`<sup>Required</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn"></a>

```typescript
public readonly redshiftIdcApplicationArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

const redshiftserverlessNamespaceConfig: redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | A unique identifier for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>string</code> | The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">adminUsername</a></code> | <code>string</code> | The user name associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">adminUserPassword</a></code> | <code>string</code> | The password associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">dbName</a></code> | <code>string</code> | The database name associated for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | The default IAM role ARN for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName">finalSnapshotName</a></code> | <code>string</code> | The name of the namespace the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod">finalSnapshotRetentionPeriod</a></code> | <code>number</code> | The number of days to retain automated snapshot in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">logExports</a></code> | <code>string[]</code> | The collection of log types to be exported provided by the customer. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword">manageAdminPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>string</code> | The resource policy document that will be attached to the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>string</code> | The ARN for the Redshift application that integrates with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations">snapshotCopyConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>[]</code> | The snapshot copy configurations for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>[]</code> | The list of tags for the namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

A unique identifier for the namespace.

You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}

---

##### `adminPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId"></a>

```typescript
public readonly adminPasswordSecretKmsKeyId: string;
```

- *Type:* string

The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.

You can only use this parameter if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

The user name associated with the admin user for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}

---

##### `adminUserPassword`<sup>Optional</sup> <a name="adminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```typescript
public readonly adminUserPassword: string;
```

- *Type:* string

The password associated with the admin user for the namespace that is being created.

Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The database name associated for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}

---

##### `defaultIamRoleArn`<sup>Optional</sup> <a name="defaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

The default IAM role ARN for the namespace that is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}

---

##### `finalSnapshotName`<sup>Optional</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName"></a>

```typescript
public readonly finalSnapshotName: string;
```

- *Type:* string

The name of the namespace the source snapshot was created from.

Please specify the name if needed before deleting namespace

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#final_snapshot_name RedshiftserverlessNamespace#final_snapshot_name}

---

##### `finalSnapshotRetentionPeriod`<sup>Optional</sup> <a name="finalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod"></a>

```typescript
public readonly finalSnapshotRetentionPeriod: number;
```

- *Type:* number

The number of days to retain automated snapshot in the destination region after they are copied from the source region.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#final_snapshot_retention_period RedshiftserverlessNamespace#final_snapshot_retention_period}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

The collection of log types to be exported provided by the customer.

Should only be one of the three supported log types: userlog, useractivitylog and connectionlog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}

---

##### `manageAdminPassword`<sup>Optional</sup> <a name="manageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword"></a>

```typescript
public readonly manageAdminPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.

You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}

---

##### `namespaceResourcePolicy`<sup>Optional</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy"></a>

```typescript
public readonly namespaceResourcePolicy: string;
```

- *Type:* string

The resource policy document that will be attached to the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#namespace_resource_policy RedshiftserverlessNamespace#namespace_resource_policy}

---

##### `redshiftIdcApplicationArn`<sup>Optional</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn"></a>

```typescript
public readonly redshiftIdcApplicationArn: string;
```

- *Type:* string

The ARN for the Redshift application that integrates with IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#redshift_idc_application_arn RedshiftserverlessNamespace#redshift_idc_application_arn}

---

##### `snapshotCopyConfigurations`<sup>Optional</sup> <a name="snapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations"></a>

```typescript
public readonly snapshotCopyConfigurations: IResolvable | RedshiftserverlessNamespaceSnapshotCopyConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>[]

The snapshot copy configurations for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#snapshot_copy_configurations RedshiftserverlessNamespace#snapshot_copy_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RedshiftserverlessNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>[]

The list of tags for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}

---

### RedshiftserverlessNamespaceNamespace <a name="RedshiftserverlessNamespaceNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

const redshiftserverlessNamespaceNamespace: redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace = { ... }
```


### RedshiftserverlessNamespaceSnapshotCopyConfigurations <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

const redshiftserverlessNamespaceSnapshotCopyConfigurations: redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId">destinationKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod">snapshotRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}. |

---

##### `destinationKmsKeyId`<sup>Optional</sup> <a name="destinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId"></a>

```typescript
public readonly destinationKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}.

---

##### `snapshotRetentionPeriod`<sup>Optional</sup> <a name="snapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod"></a>

```typescript
public readonly snapshotRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}.

---

### RedshiftserverlessNamespaceTags <a name="RedshiftserverlessNamespaceTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

const redshiftserverlessNamespaceTags: redshiftserverlessNamespace.RedshiftserverlessNamespaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessNamespaceNamespaceOutputReference <a name="RedshiftserverlessNamespaceNamespaceOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

new redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn">adminPasswordSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports">logExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn">namespaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminPasswordSecretArn`<sup>Required</sup> <a name="adminPasswordSecretArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn"></a>

```typescript
public readonly adminPasswordSecretArn: string;
```

- *Type:* string

---

##### `adminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId"></a>

```typescript
public readonly adminPasswordSecretKmsKeyId: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

---

##### `namespaceArn`<sup>Required</sup> <a name="namespaceArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn"></a>

```typescript
public readonly namespaceArn: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftserverlessNamespaceNamespace;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a>

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsList <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

new redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get"></a>

```typescript
public get(index: number): RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessNamespaceSnapshotCopyConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>[]

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

new redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId">resetDestinationKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod">resetSnapshotRetentionPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationKmsKeyId` <a name="resetDestinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId"></a>

```typescript
public resetDestinationKmsKeyId(): void
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion"></a>

```typescript
public resetDestinationRegion(): void
```

##### `resetSnapshotRetentionPeriod` <a name="resetSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod"></a>

```typescript
public resetSnapshotRetentionPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput">destinationKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput">destinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput">snapshotRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId">destinationKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod">snapshotRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationKmsKeyIdInput`<sup>Optional</sup> <a name="destinationKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput"></a>

```typescript
public readonly destinationKmsKeyIdInput: string;
```

- *Type:* string

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput"></a>

```typescript
public readonly destinationRegionInput: string;
```

- *Type:* string

---

##### `snapshotRetentionPeriodInput`<sup>Optional</sup> <a name="snapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput"></a>

```typescript
public readonly snapshotRetentionPeriodInput: number;
```

- *Type:* number

---

##### `destinationKmsKeyId`<sup>Required</sup> <a name="destinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId"></a>

```typescript
public readonly destinationKmsKeyId: string;
```

- *Type:* string

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

---

##### `snapshotRetentionPeriod`<sup>Required</sup> <a name="snapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod"></a>

```typescript
public readonly snapshotRetentionPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessNamespaceSnapshotCopyConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>

---


### RedshiftserverlessNamespaceTagsList <a name="RedshiftserverlessNamespaceTagsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

new redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get"></a>

```typescript
public get(index: number): RedshiftserverlessNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>[]

---


### RedshiftserverlessNamespaceTagsOutputReference <a name="RedshiftserverlessNamespaceTagsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { redshiftserverlessNamespace } from '@cdktn/provider-awscc'

new redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftserverlessNamespaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>

---



