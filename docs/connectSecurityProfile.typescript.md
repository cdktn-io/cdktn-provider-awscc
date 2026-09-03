# `connectSecurityProfile` Submodule <a name="`connectSecurityProfile` Submodule" id="@cdktn/provider-awscc.connectSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectSecurityProfile <a name="ConnectSecurityProfile" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile awscc_connect_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfile(scope: Construct, id: string, config: ConnectSecurityProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig">ConnectSecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig">ConnectSecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags">putAllowedAccessControlTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules">putAllowedFlowModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications">putApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration">putGranularAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlHierarchyGroupId">resetAllowedAccessControlHierarchyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlTags">resetAllowedAccessControlTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedFlowModules">resetAllowedFlowModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetApplications">resetApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetGranularAccessControlConfiguration">resetGranularAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetHierarchyRestrictedResources">resetHierarchyRestrictedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTagRestrictedResources">resetTagRestrictedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedAccessControlTags` <a name="putAllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags"></a>

```typescript
public putAllowedAccessControlTags(value: IResolvable | ConnectSecurityProfileAllowedAccessControlTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>[]

---

##### `putAllowedFlowModules` <a name="putAllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules"></a>

```typescript
public putAllowedFlowModules(value: IResolvable | ConnectSecurityProfileAllowedFlowModules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>[]

---

##### `putApplications` <a name="putApplications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications"></a>

```typescript
public putApplications(value: IResolvable | ConnectSecurityProfileApplications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>[]

---

##### `putGranularAccessControlConfiguration` <a name="putGranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration"></a>

```typescript
public putGranularAccessControlConfiguration(value: ConnectSecurityProfileGranularAccessControlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectSecurityProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>[]

---

##### `resetAllowedAccessControlHierarchyGroupId` <a name="resetAllowedAccessControlHierarchyGroupId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlHierarchyGroupId"></a>

```typescript
public resetAllowedAccessControlHierarchyGroupId(): void
```

##### `resetAllowedAccessControlTags` <a name="resetAllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlTags"></a>

```typescript
public resetAllowedAccessControlTags(): void
```

##### `resetAllowedFlowModules` <a name="resetAllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedFlowModules"></a>

```typescript
public resetAllowedFlowModules(): void
```

##### `resetApplications` <a name="resetApplications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetApplications"></a>

```typescript
public resetApplications(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGranularAccessControlConfiguration` <a name="resetGranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetGranularAccessControlConfiguration"></a>

```typescript
public resetGranularAccessControlConfiguration(): void
```

##### `resetHierarchyRestrictedResources` <a name="resetHierarchyRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetHierarchyRestrictedResources"></a>

```typescript
public resetHierarchyRestrictedResources(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetTagRestrictedResources` <a name="resetTagRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTagRestrictedResources"></a>

```typescript
public resetTagRestrictedResources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

connectSecurityProfile.ConnectSecurityProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

connectSecurityProfile.ConnectSecurityProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

connectSecurityProfile.ConnectSecurityProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTags">allowedAccessControlTags</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList">ConnectSecurityProfileAllowedAccessControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModules">allowedFlowModules</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList">ConnectSecurityProfileAllowedFlowModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applications">applications</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList">ConnectSecurityProfileApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfiguration">granularAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileArn">securityProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList">ConnectSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupIdInput">allowedAccessControlHierarchyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTagsInput">allowedAccessControlTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModulesInput">allowedFlowModulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applicationsInput">applicationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfigurationInput">granularAccessControlConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResourcesInput">hierarchyRestrictedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileNameInput">securityProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResourcesInput">tagRestrictedResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId">allowedAccessControlHierarchyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResources">hierarchyRestrictedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResources">tagRestrictedResources</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedAccessControlTags`<sup>Required</sup> <a name="allowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTags"></a>

```typescript
public readonly allowedAccessControlTags: ConnectSecurityProfileAllowedAccessControlTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList">ConnectSecurityProfileAllowedAccessControlTagsList</a>

---

##### `allowedFlowModules`<sup>Required</sup> <a name="allowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModules"></a>

```typescript
public readonly allowedFlowModules: ConnectSecurityProfileAllowedFlowModulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList">ConnectSecurityProfileAllowedFlowModulesList</a>

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applications"></a>

```typescript
public readonly applications: ConnectSecurityProfileApplicationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList">ConnectSecurityProfileApplicationsList</a>

---

##### `granularAccessControlConfiguration`<sup>Required</sup> <a name="granularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfiguration"></a>

```typescript
public readonly granularAccessControlConfiguration: ConnectSecurityProfileGranularAccessControlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedRegion"></a>

```typescript
public readonly lastModifiedRegion: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `securityProfileArn`<sup>Required</sup> <a name="securityProfileArn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileArn"></a>

```typescript
public readonly securityProfileArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tags"></a>

```typescript
public readonly tags: ConnectSecurityProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList">ConnectSecurityProfileTagsList</a>

---

##### `allowedAccessControlHierarchyGroupIdInput`<sup>Optional</sup> <a name="allowedAccessControlHierarchyGroupIdInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupIdInput"></a>

```typescript
public readonly allowedAccessControlHierarchyGroupIdInput: string;
```

- *Type:* string

---

##### `allowedAccessControlTagsInput`<sup>Optional</sup> <a name="allowedAccessControlTagsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTagsInput"></a>

```typescript
public readonly allowedAccessControlTagsInput: IResolvable | ConnectSecurityProfileAllowedAccessControlTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>[]

---

##### `allowedFlowModulesInput`<sup>Optional</sup> <a name="allowedFlowModulesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModulesInput"></a>

```typescript
public readonly allowedFlowModulesInput: IResolvable | ConnectSecurityProfileAllowedFlowModules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>[]

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applicationsInput"></a>

```typescript
public readonly applicationsInput: IResolvable | ConnectSecurityProfileApplications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `granularAccessControlConfigurationInput`<sup>Optional</sup> <a name="granularAccessControlConfigurationInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfigurationInput"></a>

```typescript
public readonly granularAccessControlConfigurationInput: IResolvable | ConnectSecurityProfileGranularAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

---

##### `hierarchyRestrictedResourcesInput`<sup>Optional</sup> <a name="hierarchyRestrictedResourcesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResourcesInput"></a>

```typescript
public readonly hierarchyRestrictedResourcesInput: string[];
```

- *Type:* string[]

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `securityProfileNameInput`<sup>Optional</sup> <a name="securityProfileNameInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileNameInput"></a>

```typescript
public readonly securityProfileNameInput: string;
```

- *Type:* string

---

##### `tagRestrictedResourcesInput`<sup>Optional</sup> <a name="tagRestrictedResourcesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResourcesInput"></a>

```typescript
public readonly tagRestrictedResourcesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectSecurityProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>[]

---

##### `allowedAccessControlHierarchyGroupId`<sup>Required</sup> <a name="allowedAccessControlHierarchyGroupId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId"></a>

```typescript
public readonly allowedAccessControlHierarchyGroupId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hierarchyRestrictedResources`<sup>Required</sup> <a name="hierarchyRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResources"></a>

```typescript
public readonly hierarchyRestrictedResources: string[];
```

- *Type:* string[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

---

##### `tagRestrictedResources`<sup>Required</sup> <a name="tagRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResources"></a>

```typescript
public readonly tagRestrictedResources: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectSecurityProfileAllowedAccessControlTags <a name="ConnectSecurityProfileAllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileAllowedAccessControlTags: connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}

---

### ConnectSecurityProfileAllowedFlowModules <a name="ConnectSecurityProfileAllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileAllowedFlowModules: connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.flowModuleId">flowModuleId</a></code> | <code>string</code> | The identifier of the application that you want to give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.type">type</a></code> | <code>string</code> | The type of the first-party application. |

---

##### `flowModuleId`<sup>Optional</sup> <a name="flowModuleId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.flowModuleId"></a>

```typescript
public readonly flowModuleId: string;
```

- *Type:* string

The identifier of the application that you want to give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#flow_module_id ConnectSecurityProfile#flow_module_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the first-party application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}

---

### ConnectSecurityProfileApplications <a name="ConnectSecurityProfileApplications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileApplications: connectSecurityProfile.ConnectSecurityProfileApplications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.applicationPermissions">applicationPermissions</a></code> | <code>string[]</code> | The permissions that the agent is granted on the application. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.namespace">namespace</a></code> | <code>string</code> | Namespace of the application that you want to give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.type">type</a></code> | <code>string</code> | The type of the application. |

---

##### `applicationPermissions`<sup>Optional</sup> <a name="applicationPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.applicationPermissions"></a>

```typescript
public readonly applicationPermissions: string[];
```

- *Type:* string[]

The permissions that the agent is granted on the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#application_permissions ConnectSecurityProfile#application_permissions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace of the application that you want to give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#namespace ConnectSecurityProfile#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}

---

### ConnectSecurityProfileConfig <a name="ConnectSecurityProfileConfig" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileConfig: connectSecurityProfile.ConnectSecurityProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | The name of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlHierarchyGroupId">allowedAccessControlHierarchyGroupId</a></code> | <code>string</code> | The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlTags">allowedAccessControlTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>[]</code> | The list of tags that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedFlowModules">allowedFlowModules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>[]</code> | The list of flow-module resources to be linked to a security profile in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.applications">applications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>[]</code> | A list of third-party applications that the security profile will give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.description">description</a></code> | <code>string</code> | The description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.granularAccessControlConfiguration">granularAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.hierarchyRestrictedResources">hierarchyRestrictedResources</a></code> | <code>string[]</code> | The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.permissions">permissions</a></code> | <code>string[]</code> | Permissions assigned to the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tagRestrictedResources">tagRestrictedResources</a></code> | <code>string[]</code> | The list of resources that a security profile applies tag restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>[]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#instance_arn ConnectSecurityProfile#instance_arn}

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

The name of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#security_profile_name ConnectSecurityProfile#security_profile_name}

---

##### `allowedAccessControlHierarchyGroupId`<sup>Optional</sup> <a name="allowedAccessControlHierarchyGroupId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlHierarchyGroupId"></a>

```typescript
public readonly allowedAccessControlHierarchyGroupId: string;
```

- *Type:* string

The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#allowed_access_control_hierarchy_group_id ConnectSecurityProfile#allowed_access_control_hierarchy_group_id}

---

##### `allowedAccessControlTags`<sup>Optional</sup> <a name="allowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlTags"></a>

```typescript
public readonly allowedAccessControlTags: IResolvable | ConnectSecurityProfileAllowedAccessControlTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>[]

The list of tags that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#allowed_access_control_tags ConnectSecurityProfile#allowed_access_control_tags}

---

##### `allowedFlowModules`<sup>Optional</sup> <a name="allowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedFlowModules"></a>

```typescript
public readonly allowedFlowModules: IResolvable | ConnectSecurityProfileAllowedFlowModules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>[]

The list of flow-module resources to be linked to a security profile in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#allowed_flow_modules ConnectSecurityProfile#allowed_flow_modules}

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.applications"></a>

```typescript
public readonly applications: IResolvable | ConnectSecurityProfileApplications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>[]

A list of third-party applications that the security profile will give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#applications ConnectSecurityProfile#applications}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#description ConnectSecurityProfile#description}

---

##### `granularAccessControlConfiguration`<sup>Optional</sup> <a name="granularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.granularAccessControlConfiguration"></a>

```typescript
public readonly granularAccessControlConfiguration: ConnectSecurityProfileGranularAccessControlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}.

---

##### `hierarchyRestrictedResources`<sup>Optional</sup> <a name="hierarchyRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.hierarchyRestrictedResources"></a>

```typescript
public readonly hierarchyRestrictedResources: string[];
```

- *Type:* string[]

The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#hierarchy_restricted_resources ConnectSecurityProfile#hierarchy_restricted_resources}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Permissions assigned to the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#permissions ConnectSecurityProfile#permissions}

---

##### `tagRestrictedResources`<sup>Optional</sup> <a name="tagRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tagRestrictedResources"></a>

```typescript
public readonly tagRestrictedResources: string[];
```

- *Type:* string[]

The list of resources that a security profile applies tag restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#tag_restricted_resources ConnectSecurityProfile#tag_restricted_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectSecurityProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>[]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#tags ConnectSecurityProfile#tags}

---

### ConnectSecurityProfileGranularAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileGranularAccessControlConfiguration: connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.property.dataTableAccessControlConfiguration">dataTableAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | Defines the access control configuration for data tables. |

---

##### `dataTableAccessControlConfiguration`<sup>Optional</sup> <a name="dataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.property.dataTableAccessControlConfiguration"></a>

```typescript
public readonly dataTableAccessControlConfiguration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

Defines the access control configuration for data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#data_table_access_control_configuration ConnectSecurityProfile#data_table_access_control_configuration}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration: connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.property.primaryAttributeAccessControlConfiguration">primaryAttributeAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | Contains the configuration for record-based access control. |

---

##### `primaryAttributeAccessControlConfiguration`<sup>Optional</sup> <a name="primaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.property.primaryAttributeAccessControlConfiguration"></a>

```typescript
public readonly primaryAttributeAccessControlConfiguration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

Contains the configuration for record-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#primary_attribute_access_control_configuration ConnectSecurityProfile#primary_attribute_access_control_configuration}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration: connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.property.primaryAttributeValues">primaryAttributeValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>[]</code> | An array of PrimaryAttributeValue objects. |

---

##### `primaryAttributeValues`<sup>Optional</sup> <a name="primaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.property.primaryAttributeValues"></a>

```typescript
public readonly primaryAttributeValues: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>[]

An array of PrimaryAttributeValue objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#primary_attribute_values ConnectSecurityProfile#primary_attribute_values}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues: connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.accessType">accessType</a></code> | <code>string</code> | Specifies the type of access granted. Currently, only "ALLOW" is supported. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.attributeName">attributeName</a></code> | <code>string</code> | The name of the primary attribute. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.values">values</a></code> | <code>string[]</code> | An array of allowed primary values for the specified primary attribute. |

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

Specifies the type of access granted. Currently, only "ALLOW" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#access_type ConnectSecurityProfile#access_type}

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

The name of the primary attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#attribute_name ConnectSecurityProfile#attribute_name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of allowed primary values for the specified primary attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#values ConnectSecurityProfile#values}

---

### ConnectSecurityProfileTags <a name="ConnectSecurityProfileTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

const connectSecurityProfileTags: connectSecurityProfile.ConnectSecurityProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectSecurityProfileAllowedAccessControlTagsList <a name="ConnectSecurityProfileAllowedAccessControlTagsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get"></a>

```typescript
public get(index: number): ConnectSecurityProfileAllowedAccessControlTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileAllowedAccessControlTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>[]

---


### ConnectSecurityProfileAllowedAccessControlTagsOutputReference <a name="ConnectSecurityProfileAllowedAccessControlTagsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileAllowedAccessControlTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>

---


### ConnectSecurityProfileAllowedFlowModulesList <a name="ConnectSecurityProfileAllowedFlowModulesList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get"></a>

```typescript
public get(index: number): ConnectSecurityProfileAllowedFlowModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileAllowedFlowModules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>[]

---


### ConnectSecurityProfileAllowedFlowModulesOutputReference <a name="ConnectSecurityProfileAllowedFlowModulesOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetFlowModuleId">resetFlowModuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowModuleId` <a name="resetFlowModuleId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetFlowModuleId"></a>

```typescript
public resetFlowModuleId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleIdInput">flowModuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId">flowModuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowModuleIdInput`<sup>Optional</sup> <a name="flowModuleIdInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleIdInput"></a>

```typescript
public readonly flowModuleIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `flowModuleId`<sup>Required</sup> <a name="flowModuleId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId"></a>

```typescript
public readonly flowModuleId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileAllowedFlowModules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>

---


### ConnectSecurityProfileApplicationsList <a name="ConnectSecurityProfileApplicationsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileApplicationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get"></a>

```typescript
public get(index: number): ConnectSecurityProfileApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileApplications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>[]

---


### ConnectSecurityProfileApplicationsOutputReference <a name="ConnectSecurityProfileApplicationsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetApplicationPermissions">resetApplicationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationPermissions` <a name="resetApplicationPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetApplicationPermissions"></a>

```typescript
public resetApplicationPermissions(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissionsInput">applicationPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions">applicationPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationPermissionsInput`<sup>Optional</sup> <a name="applicationPermissionsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissionsInput"></a>

```typescript
public readonly applicationPermissionsInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applicationPermissions`<sup>Required</sup> <a name="applicationPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions"></a>

```typescript
public readonly applicationPermissions: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileApplications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration">putPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resetPrimaryAttributeAccessControlConfiguration">resetPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryAttributeAccessControlConfiguration` <a name="putPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration"></a>

```typescript
public putPrimaryAttributeAccessControlConfiguration(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---

##### `resetPrimaryAttributeAccessControlConfiguration` <a name="resetPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resetPrimaryAttributeAccessControlConfiguration"></a>

```typescript
public resetPrimaryAttributeAccessControlConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration">primaryAttributeAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfigurationInput">primaryAttributeAccessControlConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryAttributeAccessControlConfiguration`<sup>Required</sup> <a name="primaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration"></a>

```typescript
public readonly primaryAttributeAccessControlConfiguration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a>

---

##### `primaryAttributeAccessControlConfigurationInput`<sup>Optional</sup> <a name="primaryAttributeAccessControlConfigurationInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfigurationInput"></a>

```typescript
public readonly primaryAttributeAccessControlConfigurationInput: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues">putPrimaryAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resetPrimaryAttributeValues">resetPrimaryAttributeValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryAttributeValues` <a name="putPrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues"></a>

```typescript
public putPrimaryAttributeValues(value: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>[]

---

##### `resetPrimaryAttributeValues` <a name="resetPrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resetPrimaryAttributeValues"></a>

```typescript
public resetPrimaryAttributeValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues">primaryAttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValuesInput">primaryAttributeValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryAttributeValues`<sup>Required</sup> <a name="primaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues"></a>

```typescript
public readonly primaryAttributeValues: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a>

---

##### `primaryAttributeValuesInput`<sup>Optional</sup> <a name="primaryAttributeValuesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValuesInput"></a>

```typescript
public readonly primaryAttributeValuesInput: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get"></a>

```typescript
public get(index: number): ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>[]

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessType` <a name="resetAccessType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAccessType"></a>

```typescript
public resetAccessType(): void
```

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration">putDataTableAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resetDataTableAccessControlConfiguration">resetDataTableAccessControlConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataTableAccessControlConfiguration` <a name="putDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration"></a>

```typescript
public putDataTableAccessControlConfiguration(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---

##### `resetDataTableAccessControlConfiguration` <a name="resetDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resetDataTableAccessControlConfiguration"></a>

```typescript
public resetDataTableAccessControlConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration">dataTableAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfigurationInput">dataTableAccessControlConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTableAccessControlConfiguration`<sup>Required</sup> <a name="dataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration"></a>

```typescript
public readonly dataTableAccessControlConfiguration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a>

---

##### `dataTableAccessControlConfigurationInput`<sup>Optional</sup> <a name="dataTableAccessControlConfigurationInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfigurationInput"></a>

```typescript
public readonly dataTableAccessControlConfigurationInput: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileGranularAccessControlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

---


### ConnectSecurityProfileTagsList <a name="ConnectSecurityProfileTagsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get"></a>

```typescript
public get(index: number): ConnectSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>[]

---


### ConnectSecurityProfileTagsOutputReference <a name="ConnectSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer"></a>

```typescript
import { connectSecurityProfile } from '@cdktn/provider-awscc'

new connectSecurityProfile.ConnectSecurityProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectSecurityProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>

---



