# `grafanaWorkspace` Submodule <a name="`grafanaWorkspace` Submodule" id="@cdktn/provider-awscc.grafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspace <a name="GrafanaWorkspace" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace awscc_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspace(scope: Construct, id: string, config: GrafanaWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig">GrafanaWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl">putNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration">putSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion">resetGrafanaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl">resetNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations">resetNotificationDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName">resetOrganizationRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetPluginAdminEnabled">resetPluginAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetSamlConfiguration">resetSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetStackSetName">resetStackSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkAccessControl` <a name="putNetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl"></a>

```typescript
public putNetworkAccessControl(value: GrafanaWorkspaceNetworkAccessControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---

##### `putSamlConfiguration` <a name="putSamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration"></a>

```typescript
public putSamlConfiguration(value: GrafanaWorkspaceSamlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putSamlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags"></a>

```typescript
public putTags(value: IResolvable | GrafanaWorkspaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: GrafanaWorkspaceVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetClientToken"></a>

```typescript
public resetClientToken(): void
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGrafanaVersion` <a name="resetGrafanaVersion" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion"></a>

```typescript
public resetGrafanaVersion(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkAccessControl` <a name="resetNetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl"></a>

```typescript
public resetNetworkAccessControl(): void
```

##### `resetNotificationDestinations` <a name="resetNotificationDestinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations"></a>

```typescript
public resetNotificationDestinations(): void
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits"></a>

```typescript
public resetOrganizationalUnits(): void
```

##### `resetOrganizationRoleName` <a name="resetOrganizationRoleName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName"></a>

```typescript
public resetOrganizationRoleName(): void
```

##### `resetPluginAdminEnabled` <a name="resetPluginAdminEnabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetPluginAdminEnabled"></a>

```typescript
public resetPluginAdminEnabled(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSamlConfiguration` <a name="resetSamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetSamlConfiguration"></a>

```typescript
public resetSamlConfiguration(): void
```

##### `resetStackSetName` <a name="resetStackSetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetStackSetName"></a>

```typescript
public resetStackSetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration"></a>

```typescript
public resetVpcConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GrafanaWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

grafanaWorkspace.GrafanaWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

grafanaWorkspace.GrafanaWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

grafanaWorkspace.GrafanaWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

grafanaWorkspace.GrafanaWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GrafanaWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrafanaWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.modificationTimestamp">modificationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference">GrafanaWorkspaceSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus">samlConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.ssoClientId">ssoClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList">GrafanaWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput">accountAccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput">authenticationProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientTokenInput">clientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput">dataSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput">grafanaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput">networkAccessControlInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput">notificationDestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput">organizationRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput">permissionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabledInput">pluginAdminEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationInput">samlConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput">stackSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType">accountAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders">authenticationProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSources">dataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations">notificationDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionType">permissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetName">stackSetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modificationTimestamp`<sup>Required</sup> <a name="modificationTimestamp" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.modificationTimestamp"></a>

```typescript
public readonly modificationTimestamp: string;
```

- *Type:* string

---

##### `networkAccessControl`<sup>Required</sup> <a name="networkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: GrafanaWorkspaceNetworkAccessControlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `samlConfiguration`<sup>Required</sup> <a name="samlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: GrafanaWorkspaceSamlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference">GrafanaWorkspaceSamlConfigurationOutputReference</a>

---

##### `samlConfigurationStatus`<sup>Required</sup> <a name="samlConfigurationStatus" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus"></a>

```typescript
public readonly samlConfigurationStatus: string;
```

- *Type:* string

---

##### `ssoClientId`<sup>Required</sup> <a name="ssoClientId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.ssoClientId"></a>

```typescript
public readonly ssoClientId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tags"></a>

```typescript
public readonly tags: GrafanaWorkspaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList">GrafanaWorkspaceTagsList</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: GrafanaWorkspaceVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `accountAccessTypeInput`<sup>Optional</sup> <a name="accountAccessTypeInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput"></a>

```typescript
public readonly accountAccessTypeInput: string;
```

- *Type:* string

---

##### `authenticationProvidersInput`<sup>Optional</sup> <a name="authenticationProvidersInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput"></a>

```typescript
public readonly authenticationProvidersInput: string[];
```

- *Type:* string[]

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientTokenInput"></a>

```typescript
public readonly clientTokenInput: string;
```

- *Type:* string

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `grafanaVersionInput`<sup>Optional</sup> <a name="grafanaVersionInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput"></a>

```typescript
public readonly grafanaVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAccessControlInput`<sup>Optional</sup> <a name="networkAccessControlInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput"></a>

```typescript
public readonly networkAccessControlInput: IResolvable | GrafanaWorkspaceNetworkAccessControl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---

##### `notificationDestinationsInput`<sup>Optional</sup> <a name="notificationDestinationsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput"></a>

```typescript
public readonly notificationDestinationsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput"></a>

```typescript
public readonly organizationalUnitsInput: string[];
```

- *Type:* string[]

---

##### `organizationRoleNameInput`<sup>Optional</sup> <a name="organizationRoleNameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput"></a>

```typescript
public readonly organizationRoleNameInput: string;
```

- *Type:* string

---

##### `permissionTypeInput`<sup>Optional</sup> <a name="permissionTypeInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput"></a>

```typescript
public readonly permissionTypeInput: string;
```

- *Type:* string

---

##### `pluginAdminEnabledInput`<sup>Optional</sup> <a name="pluginAdminEnabledInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabledInput"></a>

```typescript
public readonly pluginAdminEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `samlConfigurationInput`<sup>Optional</sup> <a name="samlConfigurationInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationInput"></a>

```typescript
public readonly samlConfigurationInput: IResolvable | GrafanaWorkspaceSamlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---

##### `stackSetNameInput`<sup>Optional</sup> <a name="stackSetNameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput"></a>

```typescript
public readonly stackSetNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GrafanaWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: IResolvable | GrafanaWorkspaceVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: string;
```

- *Type:* string

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: string[];
```

- *Type:* string[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationDestinations`<sup>Required</sup> <a name="notificationDestinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `organizationRoleName`<sup>Required</sup> <a name="organizationRoleName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

---

##### `pluginAdminEnabled`<sup>Required</sup> <a name="pluginAdminEnabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceConfig <a name="GrafanaWorkspaceConfig" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceConfig: grafanaWorkspace.GrafanaWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType">accountAccessType</a></code> | <code>string</code> | These enums represent valid account access types. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders">authenticationProviders</a></code> | <code>string[]</code> | List of authentication providers to enable. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType">permissionType</a></code> | <code>string</code> | These enums represent valid permission types to use when creating or configuring a Grafana workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.clientToken">clientToken</a></code> | <code>string</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources">dataSources</a></code> | <code>string[]</code> | List of data sources on the service managed IAM role. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.description">description</a></code> | <code>string</code> | Description of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | The version of Grafana to support in your workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.name">name</a></code> | <code>string</code> | The user friendly name of a workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | The configuration settings for Network Access Control. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations">notificationDestinations</a></code> | <code>string[]</code> | List of notification destinations on the customers service managed IAM role that the Grafana workspace can query. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | List of Organizational Units containing AWS accounts the Grafana workspace can pull data from. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allow workspace admins to install plugins. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | SAML configuration data associated with an AMG workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName">stackSetName</a></code> | <code>string</code> | The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]</code> | The list of tags associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: string;
```

- *Type:* string

These enums represent valid account access types.

Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: string[];
```

- *Type:* string[]

List of authentication providers to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

These enums represent valid permission types to use when creating or configuring a Grafana workspace.

The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#client_token GrafanaWorkspace#client_token}

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

List of data sources on the service managed IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}

---

##### `grafanaVersion`<sup>Optional</sup> <a name="grafanaVersion" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

The version of Grafana to support in your workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The user friendly name of a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: GrafanaWorkspaceNetworkAccessControl;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

The configuration settings for Network Access Control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: string[];
```

- *Type:* string[]

List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}

---

##### `pluginAdminEnabled`<sup>Optional</sup> <a name="pluginAdminEnabled" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allow workspace admins to install plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#plugin_admin_enabled GrafanaWorkspace#plugin_admin_enabled}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}

---

##### `samlConfiguration`<sup>Optional</sup> <a name="samlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: GrafanaWorkspaceSamlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

SAML configuration data associated with an AMG workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#saml_configuration GrafanaWorkspace#saml_configuration}

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GrafanaWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

The list of tags associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: GrafanaWorkspaceVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

### GrafanaWorkspaceNetworkAccessControl <a name="GrafanaWorkspaceNetworkAccessControl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceNetworkAccessControl: grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | The list of prefix list IDs. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds">vpceIds</a></code> | <code>string[]</code> | The list of Amazon VPC endpoint IDs for the workspace. |

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

The list of prefix list IDs.

A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}

---

##### `vpceIds`<sup>Optional</sup> <a name="vpceIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds"></a>

```typescript
public readonly vpceIds: string[];
```

- *Type:* string[]

The list of Amazon VPC endpoint IDs for the workspace.

If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}

---

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceSamlConfiguration: grafanaWorkspace.GrafanaWorkspaceSamlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string[]</code> | List of SAML organizations allowed to access Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.assertionAttributes">assertionAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | Maps Grafana friendly names to the IdPs SAML attributes. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.idpMetadata">idpMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | IdP Metadata used to configure SAML authentication in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">loginValidityDuration</a></code> | <code>number</code> | The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.roleValues">roleValues</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | Maps SAML roles to the Grafana Editor and Admin roles. |

---

##### `allowedOrganizations`<sup>Optional</sup> <a name="allowedOrganizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string[];
```

- *Type:* string[]

List of SAML organizations allowed to access Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#allowed_organizations GrafanaWorkspace#allowed_organizations}

---

##### `assertionAttributes`<sup>Optional</sup> <a name="assertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.assertionAttributes"></a>

```typescript
public readonly assertionAttributes: GrafanaWorkspaceSamlConfigurationAssertionAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

Maps Grafana friendly names to the IdPs SAML attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#assertion_attributes GrafanaWorkspace#assertion_attributes}

---

##### `idpMetadata`<sup>Optional</sup> <a name="idpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.idpMetadata"></a>

```typescript
public readonly idpMetadata: GrafanaWorkspaceSamlConfigurationIdpMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

IdP Metadata used to configure SAML authentication in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#idp_metadata GrafanaWorkspace#idp_metadata}

---

##### `loginValidityDuration`<sup>Optional</sup> <a name="loginValidityDuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```typescript
public readonly loginValidityDuration: number;
```

- *Type:* number

The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#login_validity_duration GrafanaWorkspace#login_validity_duration}

---

##### `roleValues`<sup>Optional</sup> <a name="roleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration.property.roleValues"></a>

```typescript
public readonly roleValues: GrafanaWorkspaceSamlConfigurationRoleValues;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

Maps SAML roles to the Grafana Editor and Admin roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#role_values GrafanaWorkspace#role_values}

---

### GrafanaWorkspaceSamlConfigurationAssertionAttributes <a name="GrafanaWorkspaceSamlConfigurationAssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceSamlConfigurationAssertionAttributes: grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.email">email</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users email in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.groups">groups</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users groups in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.login">login</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users login handle in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.name">name</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users name in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.org">org</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users organizations in Grafana. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.role">role</a></code> | <code>string</code> | Name of the attribute within the SAML assert to use as the users roles in Grafana. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users email in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#email GrafanaWorkspace#email}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.groups"></a>

```typescript
public readonly groups: string;
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users groups in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#groups GrafanaWorkspace#groups}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users login handle in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#login GrafanaWorkspace#login}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users name in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}

---

##### `org`<sup>Optional</sup> <a name="org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users organizations in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#org GrafanaWorkspace#org}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the attribute within the SAML assert to use as the users roles in Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#role GrafanaWorkspace#role}

---

### GrafanaWorkspaceSamlConfigurationIdpMetadata <a name="GrafanaWorkspaceSamlConfigurationIdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceSamlConfigurationIdpMetadata: grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.url">url</a></code> | <code>string</code> | URL that vends the IdPs metadata. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.xml">xml</a></code> | <code>string</code> | XML blob of the IdPs metadata. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL that vends the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#url GrafanaWorkspace#url}

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata.property.xml"></a>

```typescript
public readonly xml: string;
```

- *Type:* string

XML blob of the IdPs metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#xml GrafanaWorkspace#xml}

---

### GrafanaWorkspaceSamlConfigurationRoleValues <a name="GrafanaWorkspaceSamlConfigurationRoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceSamlConfigurationRoleValues: grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.admin">admin</a></code> | <code>string[]</code> | List of SAML roles which will be mapped into the Grafana Admin role. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.editor">editor</a></code> | <code>string[]</code> | List of SAML roles which will be mapped into the Grafana Editor role. |

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.admin"></a>

```typescript
public readonly admin: string[];
```

- *Type:* string[]

List of SAML roles which will be mapped into the Grafana Admin role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#admin GrafanaWorkspace#admin}

---

##### `editor`<sup>Optional</sup> <a name="editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues.property.editor"></a>

```typescript
public readonly editor: string[];
```

- *Type:* string[]

List of SAML roles which will be mapped into the Grafana Editor role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#editor GrafanaWorkspace#editor}

---

### GrafanaWorkspaceTags <a name="GrafanaWorkspaceTags" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceTags: grafanaWorkspace.GrafanaWorkspaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#key GrafanaWorkspace#key}. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#value GrafanaWorkspace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#key GrafanaWorkspace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#value GrafanaWorkspace#value}.

---

### GrafanaWorkspaceVpcConfiguration <a name="GrafanaWorkspaceVpcConfiguration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

const grafanaWorkspaceVpcConfiguration: grafanaWorkspace.GrafanaWorkspaceVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceNetworkAccessControlOutputReference <a name="GrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetVpceIds">resetVpceIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetPrefixListIds"></a>

```typescript
public resetPrefixListIds(): void
```

##### `resetVpceIds` <a name="resetVpceIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resetVpceIds"></a>

```typescript
public resetVpceIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput">vpceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">vpceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput"></a>

```typescript
public readonly prefixListIdsInput: string[];
```

- *Type:* string[]

---

##### `vpceIdsInput`<sup>Optional</sup> <a name="vpceIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput"></a>

```typescript
public readonly vpceIdsInput: string[];
```

- *Type:* string[]

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `vpceIds`<sup>Required</sup> <a name="vpceIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```typescript
public readonly vpceIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceNetworkAccessControl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---


### GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference <a name="GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetOrg">resetOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrg` <a name="resetOrg" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetOrg"></a>

```typescript
public resetOrg(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groupsInput">groupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.orgInput">orgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups">groups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org">org</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgInput`<sup>Optional</sup> <a name="orgInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.orgInput"></a>

```typescript
public readonly orgInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups"></a>

```typescript
public readonly groups: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceSamlConfigurationAssertionAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---


### GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference <a name="GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetXml">resetXml</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetXml` <a name="resetXml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resetXml"></a>

```typescript
public resetXml(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xmlInput">xmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml">xml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `xmlInput`<sup>Optional</sup> <a name="xmlInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xmlInput"></a>

```typescript
public readonly xmlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml"></a>

```typescript
public readonly xml: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceSamlConfigurationIdpMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---


### GrafanaWorkspaceSamlConfigurationOutputReference <a name="GrafanaWorkspaceSamlConfigurationOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes">putAssertionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata">putIdpMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues">putRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAllowedOrganizations">resetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAssertionAttributes">resetAssertionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetIdpMetadata">resetIdpMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetLoginValidityDuration">resetLoginValidityDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetRoleValues">resetRoleValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssertionAttributes` <a name="putAssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes"></a>

```typescript
public putAssertionAttributes(value: GrafanaWorkspaceSamlConfigurationAssertionAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putAssertionAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---

##### `putIdpMetadata` <a name="putIdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata"></a>

```typescript
public putIdpMetadata(value: GrafanaWorkspaceSamlConfigurationIdpMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putIdpMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---

##### `putRoleValues` <a name="putRoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues"></a>

```typescript
public putRoleValues(value: GrafanaWorkspaceSamlConfigurationRoleValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.putRoleValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---

##### `resetAllowedOrganizations` <a name="resetAllowedOrganizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAllowedOrganizations"></a>

```typescript
public resetAllowedOrganizations(): void
```

##### `resetAssertionAttributes` <a name="resetAssertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetAssertionAttributes"></a>

```typescript
public resetAssertionAttributes(): void
```

##### `resetIdpMetadata` <a name="resetIdpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetIdpMetadata"></a>

```typescript
public resetIdpMetadata(): void
```

##### `resetLoginValidityDuration` <a name="resetLoginValidityDuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetLoginValidityDuration"></a>

```typescript
public resetLoginValidityDuration(): void
```

##### `resetRoleValues` <a name="resetRoleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.resetRoleValues"></a>

```typescript
public resetRoleValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes">assertionAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata">idpMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues">roleValues</a></code> | <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizationsInput">allowedOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributesInput">assertionAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadataInput">idpMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDurationInput">loginValidityDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValuesInput">roleValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration">loginValidityDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertionAttributes`<sup>Required</sup> <a name="assertionAttributes" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes"></a>

```typescript
public readonly assertionAttributes: GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a>

---

##### `idpMetadata`<sup>Required</sup> <a name="idpMetadata" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata"></a>

```typescript
public readonly idpMetadata: GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a>

---

##### `roleValues`<sup>Required</sup> <a name="roleValues" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues"></a>

```typescript
public readonly roleValues: GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a>

---

##### `allowedOrganizationsInput`<sup>Optional</sup> <a name="allowedOrganizationsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizationsInput"></a>

```typescript
public readonly allowedOrganizationsInput: string[];
```

- *Type:* string[]

---

##### `assertionAttributesInput`<sup>Optional</sup> <a name="assertionAttributesInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributesInput"></a>

```typescript
public readonly assertionAttributesInput: IResolvable | GrafanaWorkspaceSamlConfigurationAssertionAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationAssertionAttributes">GrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---

##### `idpMetadataInput`<sup>Optional</sup> <a name="idpMetadataInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadataInput"></a>

```typescript
public readonly idpMetadataInput: IResolvable | GrafanaWorkspaceSamlConfigurationIdpMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationIdpMetadata">GrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---

##### `loginValidityDurationInput`<sup>Optional</sup> <a name="loginValidityDurationInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDurationInput"></a>

```typescript
public readonly loginValidityDurationInput: number;
```

- *Type:* number

---

##### `roleValuesInput`<sup>Optional</sup> <a name="roleValuesInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.roleValuesInput"></a>

```typescript
public readonly roleValuesInput: IResolvable | GrafanaWorkspaceSamlConfigurationRoleValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---

##### `allowedOrganizations`<sup>Required</sup> <a name="allowedOrganizations" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string[];
```

- *Type:* string[]

---

##### `loginValidityDuration`<sup>Required</sup> <a name="loginValidityDuration" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration"></a>

```typescript
public readonly loginValidityDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceSamlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfiguration">GrafanaWorkspaceSamlConfiguration</a>

---


### GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference <a name="GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetAdmin">resetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetEditor">resetEditor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdmin` <a name="resetAdmin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetAdmin"></a>

```typescript
public resetAdmin(): void
```

##### `resetEditor` <a name="resetEditor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resetEditor"></a>

```typescript
public resetEditor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.adminInput">adminInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editorInput">editorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin">admin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor">editor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminInput`<sup>Optional</sup> <a name="adminInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.adminInput"></a>

```typescript
public readonly adminInput: string[];
```

- *Type:* string[]

---

##### `editorInput`<sup>Optional</sup> <a name="editorInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editorInput"></a>

```typescript
public readonly editorInput: string[];
```

- *Type:* string[]

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin"></a>

```typescript
public readonly admin: string[];
```

- *Type:* string[]

---

##### `editor`<sup>Required</sup> <a name="editor" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor"></a>

```typescript
public readonly editor: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceSamlConfigurationRoleValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceSamlConfigurationRoleValues">GrafanaWorkspaceSamlConfigurationRoleValues</a>

---


### GrafanaWorkspaceTagsList <a name="GrafanaWorkspaceTagsList" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get"></a>

```typescript
public get(index: number): GrafanaWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>[]

---


### GrafanaWorkspaceTagsOutputReference <a name="GrafanaWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceTags">GrafanaWorkspaceTags</a>

---


### GrafanaWorkspaceVpcConfigurationOutputReference <a name="GrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { grafanaWorkspace } from '@cdktn/provider-awscc'

new grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrafanaWorkspaceVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---



