# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktn/provider-awscc.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectory(scope: Construct, id: string, config?: WorkspacesDirectoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig">putActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties">putCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig">putMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties">putSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions">putSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties">putStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">putWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">putWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig">resetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties">resetCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService">resetEnableSelfService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode">resetEndpointEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn">resetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">resetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig">resetMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties">resetSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions">resetSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties">resetStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy">resetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType">resetUserIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">resetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">resetWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription">resetWorkspaceDirectoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName">resetWorkspaceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType">resetWorkspaceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActiveDirectoryConfig` <a name="putActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig"></a>

```typescript
public putActiveDirectoryConfig(value: WorkspacesDirectoryActiveDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `putCertificateBasedAuthProperties` <a name="putCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties"></a>

```typescript
public putCertificateBasedAuthProperties(value: WorkspacesDirectoryCertificateBasedAuthProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `putMicrosoftEntraConfig` <a name="putMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig"></a>

```typescript
public putMicrosoftEntraConfig(value: WorkspacesDirectoryMicrosoftEntraConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `putSamlProperties` <a name="putSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties"></a>

```typescript
public putSamlProperties(value: WorkspacesDirectorySamlProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `putSelfservicePermissions` <a name="putSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions"></a>

```typescript
public putSelfservicePermissions(value: WorkspacesDirectorySelfservicePermissions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `putStreamingProperties` <a name="putStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties"></a>

```typescript
public putStreamingProperties(value: WorkspacesDirectoryStreamingProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspacesDirectoryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

---

##### `putWorkspaceAccessProperties` <a name="putWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```typescript
public putWorkspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `putWorkspaceCreationProperties` <a name="putWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```typescript
public putWorkspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `resetActiveDirectoryConfig` <a name="resetActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig"></a>

```typescript
public resetActiveDirectoryConfig(): void
```

##### `resetCertificateBasedAuthProperties` <a name="resetCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties"></a>

```typescript
public resetCertificateBasedAuthProperties(): void
```

##### `resetEnableSelfService` <a name="resetEnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService"></a>

```typescript
public resetEnableSelfService(): void
```

##### `resetEndpointEncryptionMode` <a name="resetEndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode"></a>

```typescript
public resetEndpointEncryptionMode(): void
```

##### `resetIdcInstanceArn` <a name="resetIdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn"></a>

```typescript
public resetIdcInstanceArn(): void
```

##### `resetIpGroupIds` <a name="resetIpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```typescript
public resetIpGroupIds(): void
```

##### `resetMicrosoftEntraConfig` <a name="resetMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig"></a>

```typescript
public resetMicrosoftEntraConfig(): void
```

##### `resetSamlProperties` <a name="resetSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties"></a>

```typescript
public resetSamlProperties(): void
```

##### `resetSelfservicePermissions` <a name="resetSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions"></a>

```typescript
public resetSelfservicePermissions(): void
```

##### `resetStreamingProperties` <a name="resetStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties"></a>

```typescript
public resetStreamingProperties(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy"></a>

```typescript
public resetTenancy(): void
```

##### `resetUserIdentityType` <a name="resetUserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType"></a>

```typescript
public resetUserIdentityType(): void
```

##### `resetWorkspaceAccessProperties` <a name="resetWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```typescript
public resetWorkspaceAccessProperties(): void
```

##### `resetWorkspaceCreationProperties` <a name="resetWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```typescript
public resetWorkspaceCreationProperties(): void
```

##### `resetWorkspaceDirectoryDescription` <a name="resetWorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription"></a>

```typescript
public resetWorkspaceDirectoryDescription(): void
```

##### `resetWorkspaceDirectoryName` <a name="resetWorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName"></a>

```typescript
public resetWorkspaceDirectoryName(): void
```

##### `resetWorkspaceType` <a name="resetWorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType"></a>

```typescript
public resetWorkspaceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

workspacesDirectory.WorkspacesDirectory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

workspacesDirectory.WorkspacesDirectory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

workspacesDirectory.WorkspacesDirectory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

workspacesDirectory.WorkspacesDirectory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName">customerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType">directoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses">dnsIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig">idcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig">microsoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode">registrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties">samlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions">selfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties">streamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput">activeDirectoryConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput">certificateBasedAuthPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput">enableSelfServiceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput">endpointEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">ipGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput">microsoftEntraConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput">samlPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput">selfservicePermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput">streamingPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput">userIdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">workspaceAccessPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">workspaceCreationPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput">workspaceDirectoryDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput">workspaceDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput">workspaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService">enableSelfService</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode">endpointEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">ipGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType">userIdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription">workspaceDirectoryDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName">workspaceDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType">workspaceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activeDirectoryConfig`<sup>Required</sup> <a name="activeDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig"></a>

```typescript
public readonly activeDirectoryConfig: WorkspacesDirectoryActiveDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateBasedAuthProperties`<sup>Required</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```typescript
public readonly certificateBasedAuthProperties: WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `customerUserName`<sup>Required</sup> <a name="customerUserName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```typescript
public readonly customerUserName: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```typescript
public readonly directoryType: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `dnsIpv6Addresses`<sup>Required</sup> <a name="dnsIpv6Addresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses"></a>

```typescript
public readonly dnsIpv6Addresses: string[];
```

- *Type:* string[]

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcConfig`<sup>Required</sup> <a name="idcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig"></a>

```typescript
public readonly idcConfig: WorkspacesDirectoryIdcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `microsoftEntraConfig`<sup>Required</sup> <a name="microsoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig"></a>

```typescript
public readonly microsoftEntraConfig: WorkspacesDirectoryMicrosoftEntraConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `registrationCode`<sup>Required</sup> <a name="registrationCode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```typescript
public readonly registrationCode: string;
```

- *Type:* string

---

##### `samlProperties`<sup>Required</sup> <a name="samlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties"></a>

```typescript
public readonly samlProperties: WorkspacesDirectorySamlPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `selfservicePermissions`<sup>Required</sup> <a name="selfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions"></a>

```typescript
public readonly selfservicePermissions: WorkspacesDirectorySelfservicePermissionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streamingProperties`<sup>Required</sup> <a name="streamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties"></a>

```typescript
public readonly streamingProperties: WorkspacesDirectoryStreamingPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```typescript
public readonly tags: WorkspacesDirectoryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a>

---

##### `workspaceAccessProperties`<sup>Required</sup> <a name="workspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```typescript
public readonly workspaceAccessProperties: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspaceCreationProperties`<sup>Required</sup> <a name="workspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```typescript
public readonly workspaceCreationProperties: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```typescript
public readonly workspaceSecurityGroupId: string;
```

- *Type:* string

---

##### `activeDirectoryConfigInput`<sup>Optional</sup> <a name="activeDirectoryConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput"></a>

```typescript
public readonly activeDirectoryConfigInput: IResolvable | WorkspacesDirectoryActiveDirectoryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `certificateBasedAuthPropertiesInput`<sup>Optional</sup> <a name="certificateBasedAuthPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput"></a>

```typescript
public readonly certificateBasedAuthPropertiesInput: IResolvable | WorkspacesDirectoryCertificateBasedAuthProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `enableSelfServiceInput`<sup>Optional</sup> <a name="enableSelfServiceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput"></a>

```typescript
public readonly enableSelfServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointEncryptionModeInput`<sup>Optional</sup> <a name="endpointEncryptionModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput"></a>

```typescript
public readonly endpointEncryptionModeInput: string;
```

- *Type:* string

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput"></a>

```typescript
public readonly idcInstanceArnInput: string;
```

- *Type:* string

---

##### `ipGroupIdsInput`<sup>Optional</sup> <a name="ipGroupIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```typescript
public readonly ipGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `microsoftEntraConfigInput`<sup>Optional</sup> <a name="microsoftEntraConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput"></a>

```typescript
public readonly microsoftEntraConfigInput: IResolvable | WorkspacesDirectoryMicrosoftEntraConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `samlPropertiesInput`<sup>Optional</sup> <a name="samlPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput"></a>

```typescript
public readonly samlPropertiesInput: IResolvable | WorkspacesDirectorySamlProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `selfservicePermissionsInput`<sup>Optional</sup> <a name="selfservicePermissionsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput"></a>

```typescript
public readonly selfservicePermissionsInput: IResolvable | WorkspacesDirectorySelfservicePermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `streamingPropertiesInput`<sup>Optional</sup> <a name="streamingPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput"></a>

```typescript
public readonly streamingPropertiesInput: IResolvable | WorkspacesDirectoryStreamingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspacesDirectoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `userIdentityTypeInput`<sup>Optional</sup> <a name="userIdentityTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput"></a>

```typescript
public readonly userIdentityTypeInput: string;
```

- *Type:* string

---

##### `workspaceAccessPropertiesInput`<sup>Optional</sup> <a name="workspaceAccessPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```typescript
public readonly workspaceAccessPropertiesInput: IResolvable | WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `workspaceCreationPropertiesInput`<sup>Optional</sup> <a name="workspaceCreationPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```typescript
public readonly workspaceCreationPropertiesInput: IResolvable | WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `workspaceDirectoryDescriptionInput`<sup>Optional</sup> <a name="workspaceDirectoryDescriptionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput"></a>

```typescript
public readonly workspaceDirectoryDescriptionInput: string;
```

- *Type:* string

---

##### `workspaceDirectoryNameInput`<sup>Optional</sup> <a name="workspaceDirectoryNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput"></a>

```typescript
public readonly workspaceDirectoryNameInput: string;
```

- *Type:* string

---

##### `workspaceTypeInput`<sup>Optional</sup> <a name="workspaceTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput"></a>

```typescript
public readonly workspaceTypeInput: string;
```

- *Type:* string

---

##### `enableSelfService`<sup>Required</sup> <a name="enableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService"></a>

```typescript
public readonly enableSelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointEncryptionMode`<sup>Required</sup> <a name="endpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode"></a>

```typescript
public readonly endpointEncryptionMode: string;
```

- *Type:* string

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

---

##### `ipGroupIds`<sup>Required</sup> <a name="ipGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```typescript
public readonly ipGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `userIdentityType`<sup>Required</sup> <a name="userIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType"></a>

```typescript
public readonly userIdentityType: string;
```

- *Type:* string

---

##### `workspaceDirectoryDescription`<sup>Required</sup> <a name="workspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```typescript
public readonly workspaceDirectoryDescription: string;
```

- *Type:* string

---

##### `workspaceDirectoryName`<sup>Required</sup> <a name="workspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName"></a>

```typescript
public readonly workspaceDirectoryName: string;
```

- *Type:* string

---

##### `workspaceType`<sup>Required</sup> <a name="workspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType"></a>

```typescript
public readonly workspaceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryActiveDirectoryConfig <a name="WorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryActiveDirectoryConfig: workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName">domainName</a></code> | <code>string</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn">serviceAccountSecretArn</a></code> | <code>string</code> | Indicates the secret ARN on the service account. |

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}

---

##### `serviceAccountSecretArn`<sup>Optional</sup> <a name="serviceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn"></a>

```typescript
public readonly serviceAccountSecretArn: string;
```

- *Type:* string

Indicates the secret ARN on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}

---

### WorkspacesDirectoryCertificateBasedAuthProperties <a name="WorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryCertificateBasedAuthProperties: workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status">status</a></code> | <code>string</code> | The status of the certificate-based authentication properties. |

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the certificate-based authentication properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryConfig: workspacesDirectory.WorkspacesDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | Information about the Active Directory config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties">certificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService">enableSelfService</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether self-service capabilities are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode">endpointEncryptionMode</a></code> | <code>string</code> | Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the identity center instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">ipGroupIds</a></code> | <code>string[]</code> | The identifiers of the IP access control groups associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig">microsoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | Specifies the configurations of the Microsoft Entra. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties">samlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions">selfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | Describes the self-service permissions for a directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties">streamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | Describes the streaming properties. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The identifiers of the subnets for your virtual private cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]</code> | The tags associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy">tenancy</a></code> | <code>string</code> | Indicates whether your WorkSpace directory is dedicated or shared. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType">userIdentityType</a></code> | <code>string</code> | The type of identity management the user is using. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | The device types and operating systems that can be used to access a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | The default values that are used to create WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription">workspaceDirectoryDescription</a></code> | <code>string</code> | Description of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName">workspaceDirectoryName</a></code> | <code>string</code> | The name of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType">workspaceType</a></code> | <code>string</code> | Indicates whether the directory's WorkSpace type is personal or pools. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activeDirectoryConfig`<sup>Optional</sup> <a name="activeDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig"></a>

```typescript
public readonly activeDirectoryConfig: WorkspacesDirectoryActiveDirectoryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

Information about the Active Directory config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `certificateBasedAuthProperties`<sup>Optional</sup> <a name="certificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties"></a>

```typescript
public readonly certificateBasedAuthProperties: WorkspacesDirectoryCertificateBasedAuthProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `enableSelfService`<sup>Optional</sup> <a name="enableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService"></a>

```typescript
public readonly enableSelfService: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether self-service capabilities are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_self_service WorkspacesDirectory#enable_self_service}

---

##### `endpointEncryptionMode`<sup>Optional</sup> <a name="endpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode"></a>

```typescript
public readonly endpointEncryptionMode: string;
```

- *Type:* string

Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#endpoint_encryption_mode WorkspacesDirectory#endpoint_encryption_mode}

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the identity center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#idc_instance_arn WorkspacesDirectory#idc_instance_arn}

---

##### `ipGroupIds`<sup>Optional</sup> <a name="ipGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```typescript
public readonly ipGroupIds: string[];
```

- *Type:* string[]

The identifiers of the IP access control groups associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}

---

##### `microsoftEntraConfig`<sup>Optional</sup> <a name="microsoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig"></a>

```typescript
public readonly microsoftEntraConfig: WorkspacesDirectoryMicrosoftEntraConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

Specifies the configurations of the Microsoft Entra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#microsoft_entra_config WorkspacesDirectory#microsoft_entra_config}

---

##### `samlProperties`<sup>Optional</sup> <a name="samlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties"></a>

```typescript
public readonly samlProperties: WorkspacesDirectorySamlProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `selfservicePermissions`<sup>Optional</sup> <a name="selfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions"></a>

```typescript
public readonly selfservicePermissions: WorkspacesDirectorySelfservicePermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

Describes the self-service permissions for a directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#selfservice_permissions WorkspacesDirectory#selfservice_permissions}

---

##### `streamingProperties`<sup>Optional</sup> <a name="streamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties"></a>

```typescript
public readonly streamingProperties: WorkspacesDirectoryStreamingProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

Describes the streaming properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_properties WorkspacesDirectory#streaming_properties}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The identifiers of the subnets for your virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspacesDirectoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

The tags associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

Indicates whether your WorkSpace directory is dedicated or shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenancy WorkspacesDirectory#tenancy}

---

##### `userIdentityType`<sup>Optional</sup> <a name="userIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType"></a>

```typescript
public readonly userIdentityType: string;
```

- *Type:* string

The type of identity management the user is using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}

---

##### `workspaceAccessProperties`<sup>Optional</sup> <a name="workspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```typescript
public readonly workspaceAccessProperties: WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

The device types and operating systems that can be used to access a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspaceCreationProperties`<sup>Optional</sup> <a name="workspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```typescript
public readonly workspaceCreationProperties: WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

The default values that are used to create WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `workspaceDirectoryDescription`<sup>Optional</sup> <a name="workspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription"></a>

```typescript
public readonly workspaceDirectoryDescription: string;
```

- *Type:* string

Description of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}

---

##### `workspaceDirectoryName`<sup>Optional</sup> <a name="workspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName"></a>

```typescript
public readonly workspaceDirectoryName: string;
```

- *Type:* string

The name of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}

---

##### `workspaceType`<sup>Optional</sup> <a name="workspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType"></a>

```typescript
public readonly workspaceType: string;
```

- *Type:* string

Indicates whether the directory's WorkSpace type is personal or pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}

---

### WorkspacesDirectoryIdcConfig <a name="WorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryIdcConfig: workspacesDirectory.WorkspacesDirectoryIdcConfig = { ... }
```


### WorkspacesDirectoryMicrosoftEntraConfig <a name="WorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryMicrosoftEntraConfig: workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn">applicationConfigSecretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the application config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The identifier of the tenant. |

---

##### `applicationConfigSecretArn`<sup>Optional</sup> <a name="applicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn"></a>

```typescript
public readonly applicationConfigSecretArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the application config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#application_config_secret_arn WorkspacesDirectory#application_config_secret_arn}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The identifier of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenant_id WorkspacesDirectory#tenant_id}

---

### WorkspacesDirectorySamlProperties <a name="WorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectorySamlProperties: workspacesDirectory.WorkspacesDirectorySamlProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName">relayStateParameterName</a></code> | <code>string</code> | The relay state parameter name supported by the SAML 2.0 identity provider (IdP). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status">status</a></code> | <code>string</code> | Indicates the status of SAML 2.0 authentication. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl">userAccessUrl</a></code> | <code>string</code> | The SAML 2.0 identity provider (IdP) user access URL. |

---

##### `relayStateParameterName`<sup>Optional</sup> <a name="relayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName"></a>

```typescript
public readonly relayStateParameterName: string;
```

- *Type:* string

The relay state parameter name supported by the SAML 2.0 identity provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates the status of SAML 2.0 authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

##### `userAccessUrl`<sup>Optional</sup> <a name="userAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl"></a>

```typescript
public readonly userAccessUrl: string;
```

- *Type:* string

The SAML 2.0 identity provider (IdP) user access URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}

---

### WorkspacesDirectorySelfservicePermissions <a name="WorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectorySelfservicePermissions: workspacesDirectory.WorkspacesDirectorySelfservicePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType">changeComputeType</a></code> | <code>string</code> | Specifies whether users can change the compute type (bundle) for their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>string</code> | Specifies whether users can increase the volume size of the drives on their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>string</code> | Specifies whether users can rebuild the operating system of a WorkSpace to its original state. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace">restartWorkspace</a></code> | <code>string</code> | Specifies whether users can restart their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode">switchRunningMode</a></code> | <code>string</code> | Specifies whether users can switch the running mode of their WorkSpace. |

---

##### `changeComputeType`<sup>Optional</sup> <a name="changeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType"></a>

```typescript
public readonly changeComputeType: string;
```

- *Type:* string

Specifies whether users can change the compute type (bundle) for their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}

---

##### `increaseVolumeSize`<sup>Optional</sup> <a name="increaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize"></a>

```typescript
public readonly increaseVolumeSize: string;
```

- *Type:* string

Specifies whether users can increase the volume size of the drives on their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}

---

##### `rebuildWorkspace`<sup>Optional</sup> <a name="rebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace"></a>

```typescript
public readonly rebuildWorkspace: string;
```

- *Type:* string

Specifies whether users can rebuild the operating system of a WorkSpace to its original state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}

---

##### `restartWorkspace`<sup>Optional</sup> <a name="restartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace"></a>

```typescript
public readonly restartWorkspace: string;
```

- *Type:* string

Specifies whether users can restart their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}

---

##### `switchRunningMode`<sup>Optional</sup> <a name="switchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode"></a>

```typescript
public readonly switchRunningMode: string;
```

- *Type:* string

Specifies whether users can switch the running mode of their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}

---

### WorkspacesDirectoryStreamingProperties <a name="WorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryStreamingProperties: workspacesDirectory.WorkspacesDirectoryStreamingProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator">globalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | Describes the Global Accelerator for directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors">storageConnectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]</code> | Indicates the storage connector used. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol">streamingExperiencePreferredProtocol</a></code> | <code>string</code> | Indicates the type of preferred protocol for the streaming experience. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings">userSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]</code> | Indicates the permission settings associated with the user. |

---

##### `globalAccelerator`<sup>Optional</sup> <a name="globalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator"></a>

```typescript
public readonly globalAccelerator: WorkspacesDirectoryStreamingPropertiesGlobalAccelerator;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

Describes the Global Accelerator for directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#global_accelerator WorkspacesDirectory#global_accelerator}

---

##### `storageConnectors`<sup>Optional</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors"></a>

```typescript
public readonly storageConnectors: IResolvable | WorkspacesDirectoryStreamingPropertiesStorageConnectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

Indicates the storage connector used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#storage_connectors WorkspacesDirectory#storage_connectors}

---

##### `streamingExperiencePreferredProtocol`<sup>Optional</sup> <a name="streamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol"></a>

```typescript
public readonly streamingExperiencePreferredProtocol: string;
```

- *Type:* string

Indicates the type of preferred protocol for the streaming experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_experience_preferred_protocol WorkspacesDirectory#streaming_experience_preferred_protocol}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings"></a>

```typescript
public readonly userSettings: IResolvable | WorkspacesDirectoryStreamingPropertiesUserSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

Indicates the permission settings associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_settings WorkspacesDirectory#user_settings}

---

### WorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="WorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryStreamingPropertiesGlobalAccelerator: workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode">mode</a></code> | <code>string</code> | Indicates if Global Accelerator for directory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol">preferredProtocol</a></code> | <code>string</code> | Indicates the preferred protocol for Global Accelerator. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Indicates if Global Accelerator for directory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#mode WorkspacesDirectory#mode}

---

##### `preferredProtocol`<sup>Optional</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol"></a>

```typescript
public readonly preferredProtocol: string;
```

- *Type:* string

Indicates the preferred protocol for Global Accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#preferred_protocol WorkspacesDirectory#preferred_protocol}

---

### WorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryStreamingPropertiesStorageConnectors: workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType">connectorType</a></code> | <code>string</code> | The type of connector used to save user files. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status">status</a></code> | <code>string</code> | Indicates if the storage connector is enabled or disabled. |

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

The type of connector used to save user files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#connector_type WorkspacesDirectory#connector_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Indicates if the storage connector is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryStreamingPropertiesUserSettings <a name="WorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryStreamingPropertiesUserSettings: workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action">action</a></code> | <code>string</code> | Indicates the type of action. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength">maximumLength</a></code> | <code>number</code> | Indicates the maximum character length for the specified user setting. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission">permission</a></code> | <code>string</code> | Indicates if the setting is enabled or disabled. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Indicates the type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#action WorkspacesDirectory#action}

---

##### `maximumLength`<sup>Optional</sup> <a name="maximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength"></a>

```typescript
public readonly maximumLength: number;
```

- *Type:* number

Indicates the maximum character length for the specified user setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#maximum_length WorkspacesDirectory#maximum_length}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Indicates if the setting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#permission WorkspacesDirectory#permission}

---

### WorkspacesDirectoryTags <a name="WorkspacesDirectoryTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryTags: workspacesDirectory.WorkspacesDirectoryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#key WorkspacesDirectory#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#value WorkspacesDirectory#value}

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryWorkspaceAccessProperties: workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig">accessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | Describes the access endpoint configuration for a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>string</code> | Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs">deviceTypeChromeOs</a></code> | <code>string</code> | Indicates whether users can use Chromebooks to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">deviceTypeIos</a></code> | <code>string</code> | Indicates whether users can use iOS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>string</code> | Indicates whether users can use Linux clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>string</code> | Indicates whether users can use macOS clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>string</code> | Indicates whether users can access their WorkSpaces through a web browser. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>string</code> | Indicates whether users can use Windows clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient">deviceTypeWorkSpacesThinClient</a></code> | <code>string</code> | Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient">deviceTypeZeroClient</a></code> | <code>string</code> | Indicates whether users can use zero client devices to access their WorkSpaces. |

---

##### `accessEndpointConfig`<sup>Optional</sup> <a name="accessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig"></a>

```typescript
public readonly accessEndpointConfig: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

Describes the access endpoint configuration for a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_config WorkspacesDirectory#access_endpoint_config}

---

##### `deviceTypeAndroid`<sup>Optional</sup> <a name="deviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```typescript
public readonly deviceTypeAndroid: string;
```

- *Type:* string

Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}

---

##### `deviceTypeChromeOs`<sup>Optional</sup> <a name="deviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs"></a>

```typescript
public readonly deviceTypeChromeOs: string;
```

- *Type:* string

Indicates whether users can use Chromebooks to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_chrome_os WorkspacesDirectory#device_type_chrome_os}

---

##### `deviceTypeIos`<sup>Optional</sup> <a name="deviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```typescript
public readonly deviceTypeIos: string;
```

- *Type:* string

Indicates whether users can use iOS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}

---

##### `deviceTypeLinux`<sup>Optional</sup> <a name="deviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```typescript
public readonly deviceTypeLinux: string;
```

- *Type:* string

Indicates whether users can use Linux clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}

---

##### `deviceTypeOsx`<sup>Optional</sup> <a name="deviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```typescript
public readonly deviceTypeOsx: string;
```

- *Type:* string

Indicates whether users can use macOS clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}

---

##### `deviceTypeWeb`<sup>Optional</sup> <a name="deviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```typescript
public readonly deviceTypeWeb: string;
```

- *Type:* string

Indicates whether users can access their WorkSpaces through a web browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}

---

##### `deviceTypeWindows`<sup>Optional</sup> <a name="deviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```typescript
public readonly deviceTypeWindows: string;
```

- *Type:* string

Indicates whether users can use Windows clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}

---

##### `deviceTypeWorkSpacesThinClient`<sup>Optional</sup> <a name="deviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient"></a>

```typescript
public readonly deviceTypeWorkSpacesThinClient: string;
```

- *Type:* string

Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_work_spaces_thin_client WorkspacesDirectory#device_type_work_spaces_thin_client}

---

##### `deviceTypeZeroClient`<sup>Optional</sup> <a name="deviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient"></a>

```typescript
public readonly deviceTypeZeroClient: string;
```

- *Type:* string

Indicates whether users can use zero client devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_zero_client WorkspacesDirectory#device_type_zero_client}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig: workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints">accessEndpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]</code> | Indicates a list of access endpoints associated with this directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols">internetFallbackProtocols</a></code> | <code>string[]</code> | Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available. |

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

Indicates a list of access endpoints associated with this directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoints WorkspacesDirectory#access_endpoints}

---

##### `internetFallbackProtocols`<sup>Optional</sup> <a name="internetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols"></a>

```typescript
public readonly internetFallbackProtocols: string[];
```

- *Type:* string[]

Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#internet_fallback_protocols WorkspacesDirectory#internet_fallback_protocols}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints: workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType">accessEndpointType</a></code> | <code>string</code> | Indicates the type of access endpoint. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Indicates the VPC endpoint to use for access. |

---

##### `accessEndpointType`<sup>Optional</sup> <a name="accessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType"></a>

```typescript
public readonly accessEndpointType: string;
```

- *Type:* string

Indicates the type of access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_type WorkspacesDirectory#access_endpoint_type}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Indicates the VPC endpoint to use for access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#vpc_endpoint_id WorkspacesDirectory#vpc_endpoint_id}

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

const workspacesDirectoryWorkspaceCreationProperties: workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>string</code> | The identifier of the default security group to apply to WorkSpaces when they are created. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">defaultOu</a></code> | <code>string</code> | The organizational unit (OU) in the directory for the WorkSpace machine accounts. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether maintenance mode is enabled for WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn">instanceIamRoleArn</a></code> | <code>string</code> | Indicates the IAM role ARN of the instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether WorkSpace users are local administrators on their WorkSpaces. |

---

##### `customSecurityGroupId`<sup>Optional</sup> <a name="customSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```typescript
public readonly customSecurityGroupId: string;
```

- *Type:* string

The identifier of the default security group to apply to WorkSpaces when they are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}

---

##### `defaultOu`<sup>Optional</sup> <a name="defaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```typescript
public readonly defaultOu: string;
```

- *Type:* string

The organizational unit (OU) in the directory for the WorkSpace machine accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}

---

##### `enableMaintenanceMode`<sup>Optional</sup> <a name="enableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```typescript
public readonly enableMaintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether maintenance mode is enabled for WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}

---

##### `instanceIamRoleArn`<sup>Optional</sup> <a name="instanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn"></a>

```typescript
public readonly instanceIamRoleArn: string;
```

- *Type:* string

Indicates the IAM role ARN of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#instance_iam_role_arn WorkspacesDirectory#instance_iam_role_arn}

---

##### `userEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```typescript
public readonly userEnabledAsLocalAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether WorkSpace users are local administrators on their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="WorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn">resetServiceAccountSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetServiceAccountSecretArn` <a name="resetServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn"></a>

```typescript
public resetServiceAccountSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput">serviceAccountSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">serviceAccountSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `serviceAccountSecretArnInput`<sup>Optional</sup> <a name="serviceAccountSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput"></a>

```typescript
public readonly serviceAccountSecretArnInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `serviceAccountSecretArn`<sup>Required</sup> <a name="serviceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```typescript
public readonly serviceAccountSecretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryActiveDirectoryConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---


### WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">resetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateAuthorityArn` <a name="resetCertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```typescript
public resetCertificateAuthorityArn(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryCertificateBasedAuthProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---


### WorkspacesDirectoryIdcConfigOutputReference <a name="WorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesDirectoryIdcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a>

---


### WorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="WorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn">resetApplicationConfigSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationConfigSecretArn` <a name="resetApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn"></a>

```typescript
public resetApplicationConfigSecretArn(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId"></a>

```typescript
public resetTenantId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput">applicationConfigSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">applicationConfigSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationConfigSecretArnInput`<sup>Optional</sup> <a name="applicationConfigSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput"></a>

```typescript
public readonly applicationConfigSecretArnInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `applicationConfigSecretArn`<sup>Required</sup> <a name="applicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```typescript
public readonly applicationConfigSecretArn: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryMicrosoftEntraConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---


### WorkspacesDirectorySamlPropertiesOutputReference <a name="WorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName">resetRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl">resetUserAccessUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRelayStateParameterName` <a name="resetRelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName"></a>

```typescript
public resetRelayStateParameterName(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUserAccessUrl` <a name="resetUserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl"></a>

```typescript
public resetUserAccessUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput">relayStateParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput">userAccessUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">relayStateParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">userAccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relayStateParameterNameInput`<sup>Optional</sup> <a name="relayStateParameterNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput"></a>

```typescript
public readonly relayStateParameterNameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `userAccessUrlInput`<sup>Optional</sup> <a name="userAccessUrlInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput"></a>

```typescript
public readonly userAccessUrlInput: string;
```

- *Type:* string

---

##### `relayStateParameterName`<sup>Required</sup> <a name="relayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```typescript
public readonly relayStateParameterName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `userAccessUrl`<sup>Required</sup> <a name="userAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```typescript
public readonly userAccessUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectorySamlProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---


### WorkspacesDirectorySelfservicePermissionsOutputReference <a name="WorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType">resetChangeComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize">resetIncreaseVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace">resetRebuildWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace">resetRestartWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode">resetSwitchRunningMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangeComputeType` <a name="resetChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType"></a>

```typescript
public resetChangeComputeType(): void
```

##### `resetIncreaseVolumeSize` <a name="resetIncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```typescript
public resetIncreaseVolumeSize(): void
```

##### `resetRebuildWorkspace` <a name="resetRebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace"></a>

```typescript
public resetRebuildWorkspace(): void
```

##### `resetRestartWorkspace` <a name="resetRestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace"></a>

```typescript
public resetRestartWorkspace(): void
```

##### `resetSwitchRunningMode` <a name="resetSwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode"></a>

```typescript
public resetSwitchRunningMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput">changeComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput">increaseVolumeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput">rebuildWorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput">restartWorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput">switchRunningModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">changeComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">restartWorkspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">switchRunningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeComputeTypeInput`<sup>Optional</sup> <a name="changeComputeTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```typescript
public readonly changeComputeTypeInput: string;
```

- *Type:* string

---

##### `increaseVolumeSizeInput`<sup>Optional</sup> <a name="increaseVolumeSizeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```typescript
public readonly increaseVolumeSizeInput: string;
```

- *Type:* string

---

##### `rebuildWorkspaceInput`<sup>Optional</sup> <a name="rebuildWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```typescript
public readonly rebuildWorkspaceInput: string;
```

- *Type:* string

---

##### `restartWorkspaceInput`<sup>Optional</sup> <a name="restartWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```typescript
public readonly restartWorkspaceInput: string;
```

- *Type:* string

---

##### `switchRunningModeInput`<sup>Optional</sup> <a name="switchRunningModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput"></a>

```typescript
public readonly switchRunningModeInput: string;
```

- *Type:* string

---

##### `changeComputeType`<sup>Required</sup> <a name="changeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```typescript
public readonly changeComputeType: string;
```

- *Type:* string

---

##### `increaseVolumeSize`<sup>Required</sup> <a name="increaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```typescript
public readonly increaseVolumeSize: string;
```

- *Type:* string

---

##### `rebuildWorkspace`<sup>Required</sup> <a name="rebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```typescript
public readonly rebuildWorkspace: string;
```

- *Type:* string

---

##### `restartWorkspace`<sup>Required</sup> <a name="restartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```typescript
public readonly restartWorkspace: string;
```

- *Type:* string

---

##### `switchRunningMode`<sup>Required</sup> <a name="switchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```typescript
public readonly switchRunningMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectorySelfservicePermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---


### WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol">resetPreferredProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetPreferredProtocol` <a name="resetPreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol"></a>

```typescript
public resetPreferredProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput">preferredProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">preferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `preferredProtocolInput`<sup>Optional</sup> <a name="preferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput"></a>

```typescript
public readonly preferredProtocolInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `preferredProtocol`<sup>Required</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```typescript
public readonly preferredProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryStreamingPropertiesGlobalAccelerator;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---


### WorkspacesDirectoryStreamingPropertiesOutputReference <a name="WorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator">putGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors">putStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator">resetGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors">resetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol">resetStreamingExperiencePreferredProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlobalAccelerator` <a name="putGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator"></a>

```typescript
public putGlobalAccelerator(value: WorkspacesDirectoryStreamingPropertiesGlobalAccelerator): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `putStorageConnectors` <a name="putStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors"></a>

```typescript
public putStorageConnectors(value: IResolvable | WorkspacesDirectoryStreamingPropertiesStorageConnectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings"></a>

```typescript
public putUserSettings(value: IResolvable | WorkspacesDirectoryStreamingPropertiesUserSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

---

##### `resetGlobalAccelerator` <a name="resetGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator"></a>

```typescript
public resetGlobalAccelerator(): void
```

##### `resetStorageConnectors` <a name="resetStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors"></a>

```typescript
public resetStorageConnectors(): void
```

##### `resetStreamingExperiencePreferredProtocol` <a name="resetStreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol"></a>

```typescript
public resetStreamingExperiencePreferredProtocol(): void
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings"></a>

```typescript
public resetUserSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">globalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">storageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput">globalAcceleratorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput">storageConnectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput">streamingExperiencePreferredProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput">userSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">streamingExperiencePreferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `globalAccelerator`<sup>Required</sup> <a name="globalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```typescript
public readonly globalAccelerator: WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `storageConnectors`<sup>Required</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```typescript
public readonly storageConnectors: WorkspacesDirectoryStreamingPropertiesStorageConnectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```typescript
public readonly userSettings: WorkspacesDirectoryStreamingPropertiesUserSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `globalAcceleratorInput`<sup>Optional</sup> <a name="globalAcceleratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput"></a>

```typescript
public readonly globalAcceleratorInput: IResolvable | WorkspacesDirectoryStreamingPropertiesGlobalAccelerator;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `storageConnectorsInput`<sup>Optional</sup> <a name="storageConnectorsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput"></a>

```typescript
public readonly storageConnectorsInput: IResolvable | WorkspacesDirectoryStreamingPropertiesStorageConnectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

---

##### `streamingExperiencePreferredProtocolInput`<sup>Optional</sup> <a name="streamingExperiencePreferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput"></a>

```typescript
public readonly streamingExperiencePreferredProtocolInput: string;
```

- *Type:* string

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput"></a>

```typescript
public readonly userSettingsInput: IResolvable | WorkspacesDirectoryStreamingPropertiesUserSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

---

##### `streamingExperiencePreferredProtocol`<sup>Required</sup> <a name="streamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```typescript
public readonly streamingExperiencePreferredProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryStreamingProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```typescript
public get(index: number): WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryStreamingPropertiesStorageConnectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>[]

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType">resetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorType` <a name="resetConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType"></a>

```typescript
public resetConnectorType(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput">connectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```typescript
public readonly connectorTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryStreamingPropertiesStorageConnectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors">WorkspacesDirectoryStreamingPropertiesStorageConnectors</a>

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```typescript
public get(index: number): WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryStreamingPropertiesUserSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>[]

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength">resetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetMaximumLength` <a name="resetMaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength"></a>

```typescript
public resetMaximumLength(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput">maximumLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">maximumLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `maximumLengthInput`<sup>Optional</sup> <a name="maximumLengthInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput"></a>

```typescript
public readonly maximumLengthInput: number;
```

- *Type:* number

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```typescript
public readonly maximumLength: number;
```

- *Type:* number

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryStreamingPropertiesUserSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings">WorkspacesDirectoryStreamingPropertiesUserSettings</a>

---


### WorkspacesDirectoryTagsList <a name="WorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get"></a>

```typescript
public get(index: number): WorkspacesDirectoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>[]

---


### WorkspacesDirectoryTagsOutputReference <a name="WorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags">WorkspacesDirectoryTags</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```typescript
public get(index: number): WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType">resetAccessEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessEndpointType` <a name="resetAccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType"></a>

```typescript
public resetAccessEndpointType(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput">accessEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">accessEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessEndpointTypeInput`<sup>Optional</sup> <a name="accessEndpointTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput"></a>

```typescript
public readonly accessEndpointTypeInput: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `accessEndpointType`<sup>Required</sup> <a name="accessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```typescript
public readonly accessEndpointType: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints">putAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints">resetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols">resetInternetFallbackProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessEndpoints` <a name="putAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints"></a>

```typescript
public putAccessEndpoints(value: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

---

##### `resetAccessEndpoints` <a name="resetAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints"></a>

```typescript
public resetAccessEndpoints(): void
```

##### `resetInternetFallbackProtocols` <a name="resetInternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols"></a>

```typescript
public resetInternetFallbackProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput">accessEndpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput">internetFallbackProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">internetFallbackProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `accessEndpointsInput`<sup>Optional</sup> <a name="accessEndpointsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput"></a>

```typescript
public readonly accessEndpointsInput: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints</a>[]

---

##### `internetFallbackProtocolsInput`<sup>Optional</sup> <a name="internetFallbackProtocolsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput"></a>

```typescript
public readonly internetFallbackProtocolsInput: string[];
```

- *Type:* string[]

---

##### `internetFallbackProtocols`<sup>Required</sup> <a name="internetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```typescript
public readonly internetFallbackProtocols: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig">putAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig">resetAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">resetDeviceTypeAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs">resetDeviceTypeChromeOs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">resetDeviceTypeIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">resetDeviceTypeLinux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">resetDeviceTypeOsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">resetDeviceTypeWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">resetDeviceTypeWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient">resetDeviceTypeWorkSpacesThinClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient">resetDeviceTypeZeroClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessEndpointConfig` <a name="putAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig"></a>

```typescript
public putAccessEndpointConfig(value: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `resetAccessEndpointConfig` <a name="resetAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig"></a>

```typescript
public resetAccessEndpointConfig(): void
```

##### `resetDeviceTypeAndroid` <a name="resetDeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```typescript
public resetDeviceTypeAndroid(): void
```

##### `resetDeviceTypeChromeOs` <a name="resetDeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs"></a>

```typescript
public resetDeviceTypeChromeOs(): void
```

##### `resetDeviceTypeIos` <a name="resetDeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```typescript
public resetDeviceTypeIos(): void
```

##### `resetDeviceTypeLinux` <a name="resetDeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```typescript
public resetDeviceTypeLinux(): void
```

##### `resetDeviceTypeOsx` <a name="resetDeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```typescript
public resetDeviceTypeOsx(): void
```

##### `resetDeviceTypeWeb` <a name="resetDeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```typescript
public resetDeviceTypeWeb(): void
```

##### `resetDeviceTypeWindows` <a name="resetDeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```typescript
public resetDeviceTypeWindows(): void
```

##### `resetDeviceTypeWorkSpacesThinClient` <a name="resetDeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient"></a>

```typescript
public resetDeviceTypeWorkSpacesThinClient(): void
```

##### `resetDeviceTypeZeroClient` <a name="resetDeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient"></a>

```typescript
public resetDeviceTypeZeroClient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">accessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput">accessEndpointConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">deviceTypeAndroidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput">deviceTypeChromeOsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">deviceTypeIosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">deviceTypeLinuxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">deviceTypeOsxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">deviceTypeWebInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">deviceTypeWindowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput">deviceTypeWorkSpacesThinClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput">deviceTypeZeroClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">deviceTypeChromeOs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">deviceTypeIos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">deviceTypeWorkSpacesThinClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">deviceTypeZeroClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessEndpointConfig`<sup>Required</sup> <a name="accessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```typescript
public readonly accessEndpointConfig: WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `accessEndpointConfigInput`<sup>Optional</sup> <a name="accessEndpointConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput"></a>

```typescript
public readonly accessEndpointConfigInput: IResolvable | WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `deviceTypeAndroidInput`<sup>Optional</sup> <a name="deviceTypeAndroidInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```typescript
public readonly deviceTypeAndroidInput: string;
```

- *Type:* string

---

##### `deviceTypeChromeOsInput`<sup>Optional</sup> <a name="deviceTypeChromeOsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput"></a>

```typescript
public readonly deviceTypeChromeOsInput: string;
```

- *Type:* string

---

##### `deviceTypeIosInput`<sup>Optional</sup> <a name="deviceTypeIosInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```typescript
public readonly deviceTypeIosInput: string;
```

- *Type:* string

---

##### `deviceTypeLinuxInput`<sup>Optional</sup> <a name="deviceTypeLinuxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```typescript
public readonly deviceTypeLinuxInput: string;
```

- *Type:* string

---

##### `deviceTypeOsxInput`<sup>Optional</sup> <a name="deviceTypeOsxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```typescript
public readonly deviceTypeOsxInput: string;
```

- *Type:* string

---

##### `deviceTypeWebInput`<sup>Optional</sup> <a name="deviceTypeWebInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```typescript
public readonly deviceTypeWebInput: string;
```

- *Type:* string

---

##### `deviceTypeWindowsInput`<sup>Optional</sup> <a name="deviceTypeWindowsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```typescript
public readonly deviceTypeWindowsInput: string;
```

- *Type:* string

---

##### `deviceTypeWorkSpacesThinClientInput`<sup>Optional</sup> <a name="deviceTypeWorkSpacesThinClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput"></a>

```typescript
public readonly deviceTypeWorkSpacesThinClientInput: string;
```

- *Type:* string

---

##### `deviceTypeZeroClientInput`<sup>Optional</sup> <a name="deviceTypeZeroClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput"></a>

```typescript
public readonly deviceTypeZeroClientInput: string;
```

- *Type:* string

---

##### `deviceTypeAndroid`<sup>Required</sup> <a name="deviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```typescript
public readonly deviceTypeAndroid: string;
```

- *Type:* string

---

##### `deviceTypeChromeOs`<sup>Required</sup> <a name="deviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```typescript
public readonly deviceTypeChromeOs: string;
```

- *Type:* string

---

##### `deviceTypeIos`<sup>Required</sup> <a name="deviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```typescript
public readonly deviceTypeIos: string;
```

- *Type:* string

---

##### `deviceTypeLinux`<sup>Required</sup> <a name="deviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```typescript
public readonly deviceTypeLinux: string;
```

- *Type:* string

---

##### `deviceTypeOsx`<sup>Required</sup> <a name="deviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```typescript
public readonly deviceTypeOsx: string;
```

- *Type:* string

---

##### `deviceTypeWeb`<sup>Required</sup> <a name="deviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```typescript
public readonly deviceTypeWeb: string;
```

- *Type:* string

---

##### `deviceTypeWindows`<sup>Required</sup> <a name="deviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```typescript
public readonly deviceTypeWindows: string;
```

- *Type:* string

---

##### `deviceTypeWorkSpacesThinClient`<sup>Required</sup> <a name="deviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```typescript
public readonly deviceTypeWorkSpacesThinClient: string;
```

- *Type:* string

---

##### `deviceTypeZeroClient`<sup>Required</sup> <a name="deviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```typescript
public readonly deviceTypeZeroClient: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktn/provider-awscc'

new workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">resetCustomSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">resetDefaultOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">resetEnableMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn">resetInstanceIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">resetUserEnabledAsLocalAdministrator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSecurityGroupId` <a name="resetCustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```typescript
public resetCustomSecurityGroupId(): void
```

##### `resetDefaultOu` <a name="resetDefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```typescript
public resetDefaultOu(): void
```

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```typescript
public resetEnableInternetAccess(): void
```

##### `resetEnableMaintenanceMode` <a name="resetEnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```typescript
public resetEnableMaintenanceMode(): void
```

##### `resetInstanceIamRoleArn` <a name="resetInstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn"></a>

```typescript
public resetInstanceIamRoleArn(): void
```

##### `resetUserEnabledAsLocalAdministrator` <a name="resetUserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```typescript
public resetUserEnabledAsLocalAdministrator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">customSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">defaultOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">enableMaintenanceModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput">instanceIamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">userEnabledAsLocalAdministratorInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">defaultOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">instanceIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSecurityGroupIdInput`<sup>Optional</sup> <a name="customSecurityGroupIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```typescript
public readonly customSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `defaultOuInput`<sup>Optional</sup> <a name="defaultOuInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```typescript
public readonly defaultOuInput: string;
```

- *Type:* string

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```typescript
public readonly enableInternetAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableMaintenanceModeInput`<sup>Optional</sup> <a name="enableMaintenanceModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```typescript
public readonly enableMaintenanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceIamRoleArnInput`<sup>Optional</sup> <a name="instanceIamRoleArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput"></a>

```typescript
public readonly instanceIamRoleArnInput: string;
```

- *Type:* string

---

##### `userEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="userEnabledAsLocalAdministratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```typescript
public readonly userEnabledAsLocalAdministratorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customSecurityGroupId`<sup>Required</sup> <a name="customSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```typescript
public readonly customSecurityGroupId: string;
```

- *Type:* string

---

##### `defaultOu`<sup>Required</sup> <a name="defaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```typescript
public readonly defaultOu: string;
```

- *Type:* string

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableMaintenanceMode`<sup>Required</sup> <a name="enableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```typescript
public readonly enableMaintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceIamRoleArn`<sup>Required</sup> <a name="instanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```typescript
public readonly instanceIamRoleArn: string;
```

- *Type:* string

---

##### `userEnabledAsLocalAdministrator`<sup>Required</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```typescript
public readonly userEnabledAsLocalAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



