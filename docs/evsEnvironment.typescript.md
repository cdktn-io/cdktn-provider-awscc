# `evsEnvironment` Submodule <a name="`evsEnvironment` Submodule" id="@cdktn/provider-awscc.evsEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvsEnvironment <a name="EvsEnvironment" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment awscc_evs_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironment(scope: Construct, id: string, config: EvsEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig">EvsEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig">EvsEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo">putConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans">putInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo">putLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups">putServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames">putVcfHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo">resetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName">resetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans">resetInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo">resetLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups">resetServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId">resetSiteId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames">resetVcfHostnames</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectivityInfo` <a name="putConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo"></a>

```typescript
public putConnectivityInfo(value: EvsEnvironmentConnectivityInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---

##### `putHosts` <a name="putHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts"></a>

```typescript
public putHosts(value: IResolvable | EvsEnvironmentHosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putHosts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

---

##### `putInitialVlans` <a name="putInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans"></a>

```typescript
public putInitialVlans(value: EvsEnvironmentInitialVlans): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putInitialVlans.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---

##### `putLicenseInfo` <a name="putLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo"></a>

```typescript
public putLicenseInfo(value: EvsEnvironmentLicenseInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putLicenseInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---

##### `putServiceAccessSecurityGroups` <a name="putServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups"></a>

```typescript
public putServiceAccessSecurityGroups(value: EvsEnvironmentServiceAccessSecurityGroups): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putServiceAccessSecurityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags"></a>

```typescript
public putTags(value: IResolvable | EvsEnvironmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

---

##### `putVcfHostnames` <a name="putVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames"></a>

```typescript
public putVcfHostnames(value: EvsEnvironmentVcfHostnames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.putVcfHostnames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---

##### `resetConnectivityInfo` <a name="resetConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetConnectivityInfo"></a>

```typescript
public resetConnectivityInfo(): void
```

##### `resetEnvironmentName` <a name="resetEnvironmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetEnvironmentName"></a>

```typescript
public resetEnvironmentName(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetInitialVlans` <a name="resetInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetInitialVlans"></a>

```typescript
public resetInitialVlans(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLicenseInfo` <a name="resetLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetLicenseInfo"></a>

```typescript
public resetLicenseInfo(): void
```

##### `resetServiceAccessSecurityGroups` <a name="resetServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetServiceAccessSecurityGroups"></a>

```typescript
public resetServiceAccessSecurityGroups(): void
```

##### `resetSiteId` <a name="resetSiteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetSiteId"></a>

```typescript
public resetSiteId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVcfHostnames` <a name="resetVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.resetVcfHostnames"></a>

```typescript
public resetVcfHostnames(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

evsEnvironment.EvsEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

evsEnvironment.EvsEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

evsEnvironment.EvsEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

evsEnvironment.EvsEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EvsEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EvsEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EvsEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EvsEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks">checks</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn">environmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState">environmentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts">hosts</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans">initialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo">licenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups">serviceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames">vcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput">connectivityInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput">environmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput">hostsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput">initialVlansInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput">licenseInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput">serviceAccessSecurityGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput">serviceAccessSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput">termsAcceptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput">vcfHostnamesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput">vcfVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId">serviceAccessSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted">termsAccepted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion">vcfVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.checks"></a>

```typescript
public readonly checks: EvsEnvironmentChecksList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList">EvsEnvironmentChecksList</a>

---

##### `connectivityInfo`<sup>Required</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfo"></a>

```typescript
public readonly connectivityInfo: EvsEnvironmentConnectivityInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference">EvsEnvironmentConnectivityInfoOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.credentials"></a>

```typescript
public readonly credentials: EvsEnvironmentCredentialsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList">EvsEnvironmentCredentialsList</a>

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentArn"></a>

```typescript
public readonly environmentArn: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `environmentState`<sup>Required</sup> <a name="environmentState" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentState"></a>

```typescript
public readonly environmentState: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hosts"></a>

```typescript
public readonly hosts: EvsEnvironmentHostsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList">EvsEnvironmentHostsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialVlans`<sup>Required</sup> <a name="initialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlans"></a>

```typescript
public readonly initialVlans: EvsEnvironmentInitialVlansOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference">EvsEnvironmentInitialVlansOutputReference</a>

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: EvsEnvironmentLicenseInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference">EvsEnvironmentLicenseInfoOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `serviceAccessSecurityGroups`<sup>Required</sup> <a name="serviceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroups"></a>

```typescript
public readonly serviceAccessSecurityGroups: EvsEnvironmentServiceAccessSecurityGroupsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference">EvsEnvironmentServiceAccessSecurityGroupsOutputReference</a>

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tags"></a>

```typescript
public readonly tags: EvsEnvironmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList">EvsEnvironmentTagsList</a>

---

##### `vcfHostnames`<sup>Required</sup> <a name="vcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnames"></a>

```typescript
public readonly vcfHostnames: EvsEnvironmentVcfHostnamesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference">EvsEnvironmentVcfHostnamesOutputReference</a>

---

##### `connectivityInfoInput`<sup>Optional</sup> <a name="connectivityInfoInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.connectivityInfoInput"></a>

```typescript
public readonly connectivityInfoInput: IResolvable | EvsEnvironmentConnectivityInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentNameInput"></a>

```typescript
public readonly environmentNameInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.hostsInput"></a>

```typescript
public readonly hostsInput: IResolvable | EvsEnvironmentHosts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

---

##### `initialVlansInput`<sup>Optional</sup> <a name="initialVlansInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.initialVlansInput"></a>

```typescript
public readonly initialVlansInput: IResolvable | EvsEnvironmentInitialVlans;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `licenseInfoInput`<sup>Optional</sup> <a name="licenseInfoInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.licenseInfoInput"></a>

```typescript
public readonly licenseInfoInput: IResolvable | EvsEnvironmentLicenseInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---

##### `serviceAccessSecurityGroupsInput`<sup>Optional</sup> <a name="serviceAccessSecurityGroupsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSecurityGroupsInput"></a>

```typescript
public readonly serviceAccessSecurityGroupsInput: IResolvable | EvsEnvironmentServiceAccessSecurityGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---

##### `serviceAccessSubnetIdInput`<sup>Optional</sup> <a name="serviceAccessSubnetIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetIdInput"></a>

```typescript
public readonly serviceAccessSubnetIdInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EvsEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

---

##### `termsAcceptedInput`<sup>Optional</sup> <a name="termsAcceptedInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAcceptedInput"></a>

```typescript
public readonly termsAcceptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vcfHostnamesInput`<sup>Optional</sup> <a name="vcfHostnamesInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfHostnamesInput"></a>

```typescript
public readonly vcfHostnamesInput: IResolvable | EvsEnvironmentVcfHostnames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---

##### `vcfVersionInput`<sup>Optional</sup> <a name="vcfVersionInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersionInput"></a>

```typescript
public readonly vcfVersionInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `serviceAccessSubnetId`<sup>Required</sup> <a name="serviceAccessSubnetId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.serviceAccessSubnetId"></a>

```typescript
public readonly serviceAccessSubnetId: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `termsAccepted`<sup>Required</sup> <a name="termsAccepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.termsAccepted"></a>

```typescript
public readonly termsAccepted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vcfVersion`<sup>Required</sup> <a name="vcfVersion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vcfVersion"></a>

```typescript
public readonly vcfVersion: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EvsEnvironmentChecks <a name="EvsEnvironmentChecks" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentChecks: evsEnvironment.EvsEnvironmentChecks = { ... }
```


### EvsEnvironmentConfig <a name="EvsEnvironmentConfig" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentConfig: evsEnvironment.EvsEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId">serviceAccessSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted">termsAccepted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion">vcfVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName">environmentName</a></code> | <code>string</code> | The name of an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts">hosts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]</code> | The initial hosts for environment only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans">initialVlans</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | The initial Vlan configuration only required upon creation. Modification after creation will have no effect. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo">licenseInfo</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | The license information for an EVS environment. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups">serviceAccessSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId">siteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames">vcfHostnames</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceAccessSubnetId`<sup>Required</sup> <a name="serviceAccessSubnetId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSubnetId"></a>

```typescript
public readonly serviceAccessSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#service_access_subnet_id EvsEnvironment#service_access_subnet_id}.

---

##### `termsAccepted`<sup>Required</sup> <a name="termsAccepted" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.termsAccepted"></a>

```typescript
public readonly termsAccepted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#terms_accepted EvsEnvironment#terms_accepted}.

---

##### `vcfVersion`<sup>Required</sup> <a name="vcfVersion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfVersion"></a>

```typescript
public readonly vcfVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vcf_version EvsEnvironment#vcf_version}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vpc_id EvsEnvironment#vpc_id}.

---

##### `connectivityInfo`<sup>Optional</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.connectivityInfo"></a>

```typescript
public readonly connectivityInfo: EvsEnvironmentConnectivityInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#connectivity_info EvsEnvironment#connectivity_info}.

---

##### `environmentName`<sup>Optional</sup> <a name="environmentName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The name of an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#environment_name EvsEnvironment#environment_name}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.hosts"></a>

```typescript
public readonly hosts: IResolvable | EvsEnvironmentHosts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

The initial hosts for environment only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#hosts EvsEnvironment#hosts}

---

##### `initialVlans`<sup>Optional</sup> <a name="initialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.initialVlans"></a>

```typescript
public readonly initialVlans: EvsEnvironmentInitialVlans;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

The initial Vlan configuration only required upon creation. Modification after creation will have no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#initial_vlans EvsEnvironment#initial_vlans}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#kms_key_id EvsEnvironment#kms_key_id}.

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: EvsEnvironmentLicenseInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

The license information for an EVS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#license_info EvsEnvironment#license_info}

---

##### `serviceAccessSecurityGroups`<sup>Optional</sup> <a name="serviceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.serviceAccessSecurityGroups"></a>

```typescript
public readonly serviceAccessSecurityGroups: EvsEnvironmentServiceAccessSecurityGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#service_access_security_groups EvsEnvironment#service_access_security_groups}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#site_id EvsEnvironment#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EvsEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#tags EvsEnvironment#tags}

---

##### `vcfHostnames`<sup>Optional</sup> <a name="vcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConfig.property.vcfHostnames"></a>

```typescript
public readonly vcfHostnames: EvsEnvironmentVcfHostnames;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vcf_hostnames EvsEnvironment#vcf_hostnames}.

---

### EvsEnvironmentConnectivityInfo <a name="EvsEnvironmentConnectivityInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentConnectivityInfo: evsEnvironment.EvsEnvironmentConnectivityInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings">privateRouteServerPeerings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}. |

---

##### `privateRouteServerPeerings`<sup>Optional</sup> <a name="privateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo.property.privateRouteServerPeerings"></a>

```typescript
public readonly privateRouteServerPeerings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#private_route_server_peerings EvsEnvironment#private_route_server_peerings}.

---

### EvsEnvironmentCredentials <a name="EvsEnvironmentCredentials" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentCredentials: evsEnvironment.EvsEnvironmentCredentials = { ... }
```


### EvsEnvironmentHosts <a name="EvsEnvironmentHosts" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentHosts: evsEnvironment.EvsEnvironmentHosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId">dedicatedHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId">placementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}. |

---

##### `dedicatedHostId`<sup>Optional</sup> <a name="dedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.dedicatedHostId"></a>

```typescript
public readonly dedicatedHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#dedicated_host_id EvsEnvironment#dedicated_host_id}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#host_name EvsEnvironment#host_name}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#instance_type EvsEnvironment#instance_type}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#key_name EvsEnvironment#key_name}.

---

##### `placementGroupId`<sup>Optional</sup> <a name="placementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts.property.placementGroupId"></a>

```typescript
public readonly placementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#placement_group_id EvsEnvironment#placement_group_id}.

---

### EvsEnvironmentInitialVlans <a name="EvsEnvironmentInitialVlans" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlans: evsEnvironment.EvsEnvironmentInitialVlans = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep">edgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1">expansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2">expansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx">hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId">hcxNetworkAclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic">isHcxPublic</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink">nsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement">vmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement">vmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion">vMotion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan">vSan</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep">vTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}. |

---

##### `edgeVTep`<sup>Optional</sup> <a name="edgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.edgeVTep"></a>

```typescript
public readonly edgeVTep: EvsEnvironmentInitialVlansEdgeVTep;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#edge_v_tep EvsEnvironment#edge_v_tep}.

---

##### `expansionVlan1`<sup>Optional</sup> <a name="expansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan1"></a>

```typescript
public readonly expansionVlan1: EvsEnvironmentInitialVlansExpansionVlan1;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#expansion_vlan_1 EvsEnvironment#expansion_vlan_1}.

---

##### `expansionVlan2`<sup>Optional</sup> <a name="expansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.expansionVlan2"></a>

```typescript
public readonly expansionVlan2: EvsEnvironmentInitialVlansExpansionVlan2;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#expansion_vlan_2 EvsEnvironment#expansion_vlan_2}.

---

##### `hcx`<sup>Optional</sup> <a name="hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcx"></a>

```typescript
public readonly hcx: EvsEnvironmentInitialVlansHcx;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#hcx EvsEnvironment#hcx}.

---

##### `hcxNetworkAclId`<sup>Optional</sup> <a name="hcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.hcxNetworkAclId"></a>

```typescript
public readonly hcxNetworkAclId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#hcx_network_acl_id EvsEnvironment#hcx_network_acl_id}.

---

##### `isHcxPublic`<sup>Optional</sup> <a name="isHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.isHcxPublic"></a>

```typescript
public readonly isHcxPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#is_hcx_public EvsEnvironment#is_hcx_public}.

---

##### `nsxUpLink`<sup>Optional</sup> <a name="nsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.nsxUpLink"></a>

```typescript
public readonly nsxUpLink: EvsEnvironmentInitialVlansNsxUpLink;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_up_link EvsEnvironment#nsx_up_link}.

---

##### `vmkManagement`<sup>Optional</sup> <a name="vmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmkManagement"></a>

```typescript
public readonly vmkManagement: EvsEnvironmentInitialVlansVmkManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vmk_management EvsEnvironment#vmk_management}.

---

##### `vmManagement`<sup>Optional</sup> <a name="vmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vmManagement"></a>

```typescript
public readonly vmManagement: EvsEnvironmentInitialVlansVmManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vm_management EvsEnvironment#vm_management}.

---

##### `vMotion`<sup>Optional</sup> <a name="vMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vMotion"></a>

```typescript
public readonly vMotion: EvsEnvironmentInitialVlansVMotion;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_motion EvsEnvironment#v_motion}.

---

##### `vSan`<sup>Optional</sup> <a name="vSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vSan"></a>

```typescript
public readonly vSan: EvsEnvironmentInitialVlansVSan;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_san EvsEnvironment#v_san}.

---

##### `vTep`<sup>Optional</sup> <a name="vTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans.property.vTep"></a>

```typescript
public readonly vTep: EvsEnvironmentInitialVlansVTep;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_tep EvsEnvironment#v_tep}.

---

### EvsEnvironmentInitialVlansEdgeVTep <a name="EvsEnvironmentInitialVlansEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansEdgeVTep: evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan1 <a name="EvsEnvironmentInitialVlansExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansExpansionVlan1: evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansExpansionVlan2 <a name="EvsEnvironmentInitialVlansExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansExpansionVlan2: evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansHcx <a name="EvsEnvironmentInitialVlansHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansHcx: evsEnvironment.EvsEnvironmentInitialVlansHcx = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansNsxUpLink <a name="EvsEnvironmentInitialVlansNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansNsxUpLink: evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmkManagement <a name="EvsEnvironmentInitialVlansVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansVmkManagement: evsEnvironment.EvsEnvironmentInitialVlansVmkManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVmManagement <a name="EvsEnvironmentInitialVlansVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansVmManagement: evsEnvironment.EvsEnvironmentInitialVlansVmManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVMotion <a name="EvsEnvironmentInitialVlansVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansVMotion: evsEnvironment.EvsEnvironmentInitialVlansVMotion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVSan <a name="EvsEnvironmentInitialVlansVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansVSan: evsEnvironment.EvsEnvironmentInitialVlansVSan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentInitialVlansVTep <a name="EvsEnvironmentInitialVlansVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentInitialVlansVTep: evsEnvironment.EvsEnvironmentInitialVlansVTep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cidr EvsEnvironment#cidr}.

---

### EvsEnvironmentLicenseInfo <a name="EvsEnvironmentLicenseInfo" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentLicenseInfo: evsEnvironment.EvsEnvironmentLicenseInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey">solutionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey">vsanKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}. |

---

##### `solutionKey`<sup>Optional</sup> <a name="solutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.solutionKey"></a>

```typescript
public readonly solutionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#solution_key EvsEnvironment#solution_key}.

---

##### `vsanKey`<sup>Optional</sup> <a name="vsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo.property.vsanKey"></a>

```typescript
public readonly vsanKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#vsan_key EvsEnvironment#vsan_key}.

---

### EvsEnvironmentServiceAccessSecurityGroups <a name="EvsEnvironmentServiceAccessSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentServiceAccessSecurityGroups: evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#security_groups EvsEnvironment#security_groups}.

---

### EvsEnvironmentTags <a name="EvsEnvironmentTags" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentTags: evsEnvironment.EvsEnvironmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#key EvsEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#value EvsEnvironment#value}

---

### EvsEnvironmentVcfHostnames <a name="EvsEnvironmentVcfHostnames" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

const evsEnvironmentVcfHostnames: evsEnvironment.EvsEnvironmentVcfHostnames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder">cloudBuilder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx">nsx</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1">nsxEdge1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2">nsxEdge2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1">nsxManager1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2">nsxManager2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3">nsxManager3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager">sddcManager</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter">vCenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}. |

---

##### `cloudBuilder`<sup>Optional</sup> <a name="cloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.cloudBuilder"></a>

```typescript
public readonly cloudBuilder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#cloud_builder EvsEnvironment#cloud_builder}.

---

##### `nsx`<sup>Optional</sup> <a name="nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsx"></a>

```typescript
public readonly nsx: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx EvsEnvironment#nsx}.

---

##### `nsxEdge1`<sup>Optional</sup> <a name="nsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge1"></a>

```typescript
public readonly nsxEdge1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_edge_1 EvsEnvironment#nsx_edge_1}.

---

##### `nsxEdge2`<sup>Optional</sup> <a name="nsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxEdge2"></a>

```typescript
public readonly nsxEdge2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_edge_2 EvsEnvironment#nsx_edge_2}.

---

##### `nsxManager1`<sup>Optional</sup> <a name="nsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager1"></a>

```typescript
public readonly nsxManager1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_manager_1 EvsEnvironment#nsx_manager_1}.

---

##### `nsxManager2`<sup>Optional</sup> <a name="nsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager2"></a>

```typescript
public readonly nsxManager2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_manager_2 EvsEnvironment#nsx_manager_2}.

---

##### `nsxManager3`<sup>Optional</sup> <a name="nsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.nsxManager3"></a>

```typescript
public readonly nsxManager3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#nsx_manager_3 EvsEnvironment#nsx_manager_3}.

---

##### `sddcManager`<sup>Optional</sup> <a name="sddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.sddcManager"></a>

```typescript
public readonly sddcManager: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#sddc_manager EvsEnvironment#sddc_manager}.

---

##### `vCenter`<sup>Optional</sup> <a name="vCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames.property.vCenter"></a>

```typescript
public readonly vCenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/evs_environment#v_center EvsEnvironment#v_center}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvsEnvironmentChecksList <a name="EvsEnvironmentChecksList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentChecksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get"></a>

```typescript
public get(index: number): EvsEnvironmentChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EvsEnvironmentChecksOutputReference <a name="EvsEnvironmentChecksOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince">impairedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `impairedSince`<sup>Required</sup> <a name="impairedSince" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.impairedSince"></a>

```typescript
public readonly impairedSince: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvsEnvironmentChecks;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentChecks">EvsEnvironmentChecks</a>

---


### EvsEnvironmentConnectivityInfoOutputReference <a name="EvsEnvironmentConnectivityInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings">resetPrivateRouteServerPeerings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateRouteServerPeerings` <a name="resetPrivateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.resetPrivateRouteServerPeerings"></a>

```typescript
public resetPrivateRouteServerPeerings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput">privateRouteServerPeeringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings">privateRouteServerPeerings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateRouteServerPeeringsInput`<sup>Optional</sup> <a name="privateRouteServerPeeringsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeeringsInput"></a>

```typescript
public readonly privateRouteServerPeeringsInput: string[];
```

- *Type:* string[]

---

##### `privateRouteServerPeerings`<sup>Required</sup> <a name="privateRouteServerPeerings" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.privateRouteServerPeerings"></a>

```typescript
public readonly privateRouteServerPeerings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentConnectivityInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentConnectivityInfo">EvsEnvironmentConnectivityInfo</a>

---


### EvsEnvironmentCredentialsList <a name="EvsEnvironmentCredentialsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get"></a>

```typescript
public get(index: number): EvsEnvironmentCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EvsEnvironmentCredentialsOutputReference <a name="EvsEnvironmentCredentialsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EvsEnvironmentCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentCredentials">EvsEnvironmentCredentials</a>

---


### EvsEnvironmentHostsList <a name="EvsEnvironmentHostsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get"></a>

```typescript
public get(index: number): EvsEnvironmentHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentHosts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>[]

---


### EvsEnvironmentHostsOutputReference <a name="EvsEnvironmentHostsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId">resetDedicatedHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId">resetPlacementGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDedicatedHostId` <a name="resetDedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetDedicatedHostId"></a>

```typescript
public resetDedicatedHostId(): void
```

##### `resetHostName` <a name="resetHostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetPlacementGroupId` <a name="resetPlacementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.resetPlacementGroupId"></a>

```typescript
public resetPlacementGroupId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput">dedicatedHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput">placementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId">dedicatedHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId">placementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedicatedHostIdInput`<sup>Optional</sup> <a name="dedicatedHostIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostIdInput"></a>

```typescript
public readonly dedicatedHostIdInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `placementGroupIdInput`<sup>Optional</sup> <a name="placementGroupIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupIdInput"></a>

```typescript
public readonly placementGroupIdInput: string;
```

- *Type:* string

---

##### `dedicatedHostId`<sup>Required</sup> <a name="dedicatedHostId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.dedicatedHostId"></a>

```typescript
public readonly dedicatedHostId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `placementGroupId`<sup>Required</sup> <a name="placementGroupId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.placementGroupId"></a>

```typescript
public readonly placementGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentHosts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentHosts">EvsEnvironmentHosts</a>

---


### EvsEnvironmentInitialVlansEdgeVTepOutputReference <a name="EvsEnvironmentInitialVlansEdgeVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansEdgeVTep;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---


### EvsEnvironmentInitialVlansExpansionVlan1OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan1OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansExpansionVlan1;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---


### EvsEnvironmentInitialVlansExpansionVlan2OutputReference <a name="EvsEnvironmentInitialVlansExpansionVlan2OutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansExpansionVlan2;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---


### EvsEnvironmentInitialVlansHcxOutputReference <a name="EvsEnvironmentInitialVlansHcxOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansHcx;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---


### EvsEnvironmentInitialVlansNsxUpLinkOutputReference <a name="EvsEnvironmentInitialVlansNsxUpLinkOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansNsxUpLink;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---


### EvsEnvironmentInitialVlansOutputReference <a name="EvsEnvironmentInitialVlansOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep">putEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1">putExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2">putExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx">putHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink">putNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement">putVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement">putVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion">putVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan">putVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep">putVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep">resetEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1">resetExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2">resetExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx">resetHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId">resetHcxNetworkAclId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic">resetIsHcxPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink">resetNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement">resetVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement">resetVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion">resetVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan">resetVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep">resetVTep</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEdgeVTep` <a name="putEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep"></a>

```typescript
public putEdgeVTep(value: EvsEnvironmentInitialVlansEdgeVTep): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putEdgeVTep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---

##### `putExpansionVlan1` <a name="putExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1"></a>

```typescript
public putExpansionVlan1(value: EvsEnvironmentInitialVlansExpansionVlan1): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---

##### `putExpansionVlan2` <a name="putExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2"></a>

```typescript
public putExpansionVlan2(value: EvsEnvironmentInitialVlansExpansionVlan2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putExpansionVlan2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---

##### `putHcx` <a name="putHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx"></a>

```typescript
public putHcx(value: EvsEnvironmentInitialVlansHcx): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putHcx.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---

##### `putNsxUpLink` <a name="putNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink"></a>

```typescript
public putNsxUpLink(value: EvsEnvironmentInitialVlansNsxUpLink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putNsxUpLink.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---

##### `putVmkManagement` <a name="putVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement"></a>

```typescript
public putVmkManagement(value: EvsEnvironmentInitialVlansVmkManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmkManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---

##### `putVmManagement` <a name="putVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement"></a>

```typescript
public putVmManagement(value: EvsEnvironmentInitialVlansVmManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVmManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---

##### `putVMotion` <a name="putVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion"></a>

```typescript
public putVMotion(value: EvsEnvironmentInitialVlansVMotion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVMotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---

##### `putVSan` <a name="putVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan"></a>

```typescript
public putVSan(value: EvsEnvironmentInitialVlansVSan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVSan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---

##### `putVTep` <a name="putVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep"></a>

```typescript
public putVTep(value: EvsEnvironmentInitialVlansVTep): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.putVTep.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---

##### `resetEdgeVTep` <a name="resetEdgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetEdgeVTep"></a>

```typescript
public resetEdgeVTep(): void
```

##### `resetExpansionVlan1` <a name="resetExpansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan1"></a>

```typescript
public resetExpansionVlan1(): void
```

##### `resetExpansionVlan2` <a name="resetExpansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetExpansionVlan2"></a>

```typescript
public resetExpansionVlan2(): void
```

##### `resetHcx` <a name="resetHcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcx"></a>

```typescript
public resetHcx(): void
```

##### `resetHcxNetworkAclId` <a name="resetHcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetHcxNetworkAclId"></a>

```typescript
public resetHcxNetworkAclId(): void
```

##### `resetIsHcxPublic` <a name="resetIsHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetIsHcxPublic"></a>

```typescript
public resetIsHcxPublic(): void
```

##### `resetNsxUpLink` <a name="resetNsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetNsxUpLink"></a>

```typescript
public resetNsxUpLink(): void
```

##### `resetVmkManagement` <a name="resetVmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmkManagement"></a>

```typescript
public resetVmkManagement(): void
```

##### `resetVmManagement` <a name="resetVmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVmManagement"></a>

```typescript
public resetVmManagement(): void
```

##### `resetVMotion` <a name="resetVMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVMotion"></a>

```typescript
public resetVMotion(): void
```

##### `resetVSan` <a name="resetVSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVSan"></a>

```typescript
public resetVSan(): void
```

##### `resetVTep` <a name="resetVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.resetVTep"></a>

```typescript
public resetVTep(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep">edgeVTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1">expansionVlan1</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2">expansionVlan2</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx">hcx</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink">nsxUpLink</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement">vmkManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement">vmManagement</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion">vMotion</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan">vSan</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep">vTep</a></code> | <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput">edgeVTepInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input">expansionVlan1Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input">expansionVlan2Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput">hcxInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput">hcxNetworkAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput">isHcxPublicInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput">nsxUpLinkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput">vmkManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput">vmManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput">vMotionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput">vSanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput">vTepInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId">hcxNetworkAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic">isHcxPublic</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeVTep`<sup>Required</sup> <a name="edgeVTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTep"></a>

```typescript
public readonly edgeVTep: EvsEnvironmentInitialVlansEdgeVTepOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTepOutputReference">EvsEnvironmentInitialVlansEdgeVTepOutputReference</a>

---

##### `expansionVlan1`<sup>Required</sup> <a name="expansionVlan1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1"></a>

```typescript
public readonly expansionVlan1: EvsEnvironmentInitialVlansExpansionVlan1OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1OutputReference">EvsEnvironmentInitialVlansExpansionVlan1OutputReference</a>

---

##### `expansionVlan2`<sup>Required</sup> <a name="expansionVlan2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2"></a>

```typescript
public readonly expansionVlan2: EvsEnvironmentInitialVlansExpansionVlan2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2OutputReference">EvsEnvironmentInitialVlansExpansionVlan2OutputReference</a>

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcx"></a>

```typescript
public readonly hcx: EvsEnvironmentInitialVlansHcxOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcxOutputReference">EvsEnvironmentInitialVlansHcxOutputReference</a>

---

##### `nsxUpLink`<sup>Required</sup> <a name="nsxUpLink" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLink"></a>

```typescript
public readonly nsxUpLink: EvsEnvironmentInitialVlansNsxUpLinkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLinkOutputReference">EvsEnvironmentInitialVlansNsxUpLinkOutputReference</a>

---

##### `vmkManagement`<sup>Required</sup> <a name="vmkManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagement"></a>

```typescript
public readonly vmkManagement: EvsEnvironmentInitialVlansVmkManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference">EvsEnvironmentInitialVlansVmkManagementOutputReference</a>

---

##### `vmManagement`<sup>Required</sup> <a name="vmManagement" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagement"></a>

```typescript
public readonly vmManagement: EvsEnvironmentInitialVlansVmManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference">EvsEnvironmentInitialVlansVmManagementOutputReference</a>

---

##### `vMotion`<sup>Required</sup> <a name="vMotion" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotion"></a>

```typescript
public readonly vMotion: EvsEnvironmentInitialVlansVMotionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference">EvsEnvironmentInitialVlansVMotionOutputReference</a>

---

##### `vSan`<sup>Required</sup> <a name="vSan" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSan"></a>

```typescript
public readonly vSan: EvsEnvironmentInitialVlansVSanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference">EvsEnvironmentInitialVlansVSanOutputReference</a>

---

##### `vTep`<sup>Required</sup> <a name="vTep" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTep"></a>

```typescript
public readonly vTep: EvsEnvironmentInitialVlansVTepOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference">EvsEnvironmentInitialVlansVTepOutputReference</a>

---

##### `edgeVTepInput`<sup>Optional</sup> <a name="edgeVTepInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.edgeVTepInput"></a>

```typescript
public readonly edgeVTepInput: IResolvable | EvsEnvironmentInitialVlansEdgeVTep;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansEdgeVTep">EvsEnvironmentInitialVlansEdgeVTep</a>

---

##### `expansionVlan1Input`<sup>Optional</sup> <a name="expansionVlan1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan1Input"></a>

```typescript
public readonly expansionVlan1Input: IResolvable | EvsEnvironmentInitialVlansExpansionVlan1;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan1">EvsEnvironmentInitialVlansExpansionVlan1</a>

---

##### `expansionVlan2Input`<sup>Optional</sup> <a name="expansionVlan2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.expansionVlan2Input"></a>

```typescript
public readonly expansionVlan2Input: IResolvable | EvsEnvironmentInitialVlansExpansionVlan2;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansExpansionVlan2">EvsEnvironmentInitialVlansExpansionVlan2</a>

---

##### `hcxInput`<sup>Optional</sup> <a name="hcxInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxInput"></a>

```typescript
public readonly hcxInput: IResolvable | EvsEnvironmentInitialVlansHcx;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansHcx">EvsEnvironmentInitialVlansHcx</a>

---

##### `hcxNetworkAclIdInput`<sup>Optional</sup> <a name="hcxNetworkAclIdInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclIdInput"></a>

```typescript
public readonly hcxNetworkAclIdInput: string;
```

- *Type:* string

---

##### `isHcxPublicInput`<sup>Optional</sup> <a name="isHcxPublicInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublicInput"></a>

```typescript
public readonly isHcxPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nsxUpLinkInput`<sup>Optional</sup> <a name="nsxUpLinkInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.nsxUpLinkInput"></a>

```typescript
public readonly nsxUpLinkInput: IResolvable | EvsEnvironmentInitialVlansNsxUpLink;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansNsxUpLink">EvsEnvironmentInitialVlansNsxUpLink</a>

---

##### `vmkManagementInput`<sup>Optional</sup> <a name="vmkManagementInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmkManagementInput"></a>

```typescript
public readonly vmkManagementInput: IResolvable | EvsEnvironmentInitialVlansVmkManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---

##### `vmManagementInput`<sup>Optional</sup> <a name="vmManagementInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vmManagementInput"></a>

```typescript
public readonly vmManagementInput: IResolvable | EvsEnvironmentInitialVlansVmManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---

##### `vMotionInput`<sup>Optional</sup> <a name="vMotionInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vMotionInput"></a>

```typescript
public readonly vMotionInput: IResolvable | EvsEnvironmentInitialVlansVMotion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---

##### `vSanInput`<sup>Optional</sup> <a name="vSanInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vSanInput"></a>

```typescript
public readonly vSanInput: IResolvable | EvsEnvironmentInitialVlansVSan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---

##### `vTepInput`<sup>Optional</sup> <a name="vTepInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.vTepInput"></a>

```typescript
public readonly vTepInput: IResolvable | EvsEnvironmentInitialVlansVTep;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---

##### `hcxNetworkAclId`<sup>Required</sup> <a name="hcxNetworkAclId" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.hcxNetworkAclId"></a>

```typescript
public readonly hcxNetworkAclId: string;
```

- *Type:* string

---

##### `isHcxPublic`<sup>Required</sup> <a name="isHcxPublic" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.isHcxPublic"></a>

```typescript
public readonly isHcxPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlans;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlans">EvsEnvironmentInitialVlans</a>

---


### EvsEnvironmentInitialVlansVmkManagementOutputReference <a name="EvsEnvironmentInitialVlansVmkManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansVmkManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmkManagement">EvsEnvironmentInitialVlansVmkManagement</a>

---


### EvsEnvironmentInitialVlansVmManagementOutputReference <a name="EvsEnvironmentInitialVlansVmManagementOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansVmManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVmManagement">EvsEnvironmentInitialVlansVmManagement</a>

---


### EvsEnvironmentInitialVlansVMotionOutputReference <a name="EvsEnvironmentInitialVlansVMotionOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansVMotion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVMotion">EvsEnvironmentInitialVlansVMotion</a>

---


### EvsEnvironmentInitialVlansVSanOutputReference <a name="EvsEnvironmentInitialVlansVSanOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansVSan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVSan">EvsEnvironmentInitialVlansVSan</a>

---


### EvsEnvironmentInitialVlansVTepOutputReference <a name="EvsEnvironmentInitialVlansVTepOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentInitialVlansVTep;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentInitialVlansVTep">EvsEnvironmentInitialVlansVTep</a>

---


### EvsEnvironmentLicenseInfoOutputReference <a name="EvsEnvironmentLicenseInfoOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentLicenseInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey">resetSolutionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey">resetVsanKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSolutionKey` <a name="resetSolutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetSolutionKey"></a>

```typescript
public resetSolutionKey(): void
```

##### `resetVsanKey` <a name="resetVsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.resetVsanKey"></a>

```typescript
public resetVsanKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput">solutionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput">vsanKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey">solutionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey">vsanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `solutionKeyInput`<sup>Optional</sup> <a name="solutionKeyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKeyInput"></a>

```typescript
public readonly solutionKeyInput: string;
```

- *Type:* string

---

##### `vsanKeyInput`<sup>Optional</sup> <a name="vsanKeyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKeyInput"></a>

```typescript
public readonly vsanKeyInput: string;
```

- *Type:* string

---

##### `solutionKey`<sup>Required</sup> <a name="solutionKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.solutionKey"></a>

```typescript
public readonly solutionKey: string;
```

- *Type:* string

---

##### `vsanKey`<sup>Required</sup> <a name="vsanKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.vsanKey"></a>

```typescript
public readonly vsanKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentLicenseInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentLicenseInfo">EvsEnvironmentLicenseInfo</a>

---


### EvsEnvironmentServiceAccessSecurityGroupsOutputReference <a name="EvsEnvironmentServiceAccessSecurityGroupsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentServiceAccessSecurityGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentServiceAccessSecurityGroups">EvsEnvironmentServiceAccessSecurityGroups</a>

---


### EvsEnvironmentTagsList <a name="EvsEnvironmentTagsList" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get"></a>

```typescript
public get(index: number): EvsEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>[]

---


### EvsEnvironmentTagsOutputReference <a name="EvsEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentTags">EvsEnvironmentTags</a>

---


### EvsEnvironmentVcfHostnamesOutputReference <a name="EvsEnvironmentVcfHostnamesOutputReference" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer"></a>

```typescript
import { evsEnvironment } from '@cdktn/provider-awscc'

new evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder">resetCloudBuilder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx">resetNsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1">resetNsxEdge1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2">resetNsxEdge2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1">resetNsxManager1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2">resetNsxManager2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3">resetNsxManager3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager">resetSddcManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter">resetVCenter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudBuilder` <a name="resetCloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetCloudBuilder"></a>

```typescript
public resetCloudBuilder(): void
```

##### `resetNsx` <a name="resetNsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsx"></a>

```typescript
public resetNsx(): void
```

##### `resetNsxEdge1` <a name="resetNsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge1"></a>

```typescript
public resetNsxEdge1(): void
```

##### `resetNsxEdge2` <a name="resetNsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxEdge2"></a>

```typescript
public resetNsxEdge2(): void
```

##### `resetNsxManager1` <a name="resetNsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager1"></a>

```typescript
public resetNsxManager1(): void
```

##### `resetNsxManager2` <a name="resetNsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager2"></a>

```typescript
public resetNsxManager2(): void
```

##### `resetNsxManager3` <a name="resetNsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetNsxManager3"></a>

```typescript
public resetNsxManager3(): void
```

##### `resetSddcManager` <a name="resetSddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetSddcManager"></a>

```typescript
public resetSddcManager(): void
```

##### `resetVCenter` <a name="resetVCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.resetVCenter"></a>

```typescript
public resetVCenter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput">cloudBuilderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input">nsxEdge1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input">nsxEdge2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput">nsxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input">nsxManager1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input">nsxManager2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input">nsxManager3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput">sddcManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput">vCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder">cloudBuilder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx">nsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1">nsxEdge1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2">nsxEdge2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1">nsxManager1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2">nsxManager2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3">nsxManager3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager">sddcManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter">vCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudBuilderInput`<sup>Optional</sup> <a name="cloudBuilderInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilderInput"></a>

```typescript
public readonly cloudBuilderInput: string;
```

- *Type:* string

---

##### `nsxEdge1Input`<sup>Optional</sup> <a name="nsxEdge1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1Input"></a>

```typescript
public readonly nsxEdge1Input: string;
```

- *Type:* string

---

##### `nsxEdge2Input`<sup>Optional</sup> <a name="nsxEdge2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2Input"></a>

```typescript
public readonly nsxEdge2Input: string;
```

- *Type:* string

---

##### `nsxInput`<sup>Optional</sup> <a name="nsxInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxInput"></a>

```typescript
public readonly nsxInput: string;
```

- *Type:* string

---

##### `nsxManager1Input`<sup>Optional</sup> <a name="nsxManager1Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1Input"></a>

```typescript
public readonly nsxManager1Input: string;
```

- *Type:* string

---

##### `nsxManager2Input`<sup>Optional</sup> <a name="nsxManager2Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2Input"></a>

```typescript
public readonly nsxManager2Input: string;
```

- *Type:* string

---

##### `nsxManager3Input`<sup>Optional</sup> <a name="nsxManager3Input" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3Input"></a>

```typescript
public readonly nsxManager3Input: string;
```

- *Type:* string

---

##### `sddcManagerInput`<sup>Optional</sup> <a name="sddcManagerInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManagerInput"></a>

```typescript
public readonly sddcManagerInput: string;
```

- *Type:* string

---

##### `vCenterInput`<sup>Optional</sup> <a name="vCenterInput" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenterInput"></a>

```typescript
public readonly vCenterInput: string;
```

- *Type:* string

---

##### `cloudBuilder`<sup>Required</sup> <a name="cloudBuilder" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.cloudBuilder"></a>

```typescript
public readonly cloudBuilder: string;
```

- *Type:* string

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsx"></a>

```typescript
public readonly nsx: string;
```

- *Type:* string

---

##### `nsxEdge1`<sup>Required</sup> <a name="nsxEdge1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge1"></a>

```typescript
public readonly nsxEdge1: string;
```

- *Type:* string

---

##### `nsxEdge2`<sup>Required</sup> <a name="nsxEdge2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxEdge2"></a>

```typescript
public readonly nsxEdge2: string;
```

- *Type:* string

---

##### `nsxManager1`<sup>Required</sup> <a name="nsxManager1" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager1"></a>

```typescript
public readonly nsxManager1: string;
```

- *Type:* string

---

##### `nsxManager2`<sup>Required</sup> <a name="nsxManager2" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager2"></a>

```typescript
public readonly nsxManager2: string;
```

- *Type:* string

---

##### `nsxManager3`<sup>Required</sup> <a name="nsxManager3" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.nsxManager3"></a>

```typescript
public readonly nsxManager3: string;
```

- *Type:* string

---

##### `sddcManager`<sup>Required</sup> <a name="sddcManager" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.sddcManager"></a>

```typescript
public readonly sddcManager: string;
```

- *Type:* string

---

##### `vCenter`<sup>Required</sup> <a name="vCenter" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.vCenter"></a>

```typescript
public readonly vCenter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EvsEnvironmentVcfHostnames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evsEnvironment.EvsEnvironmentVcfHostnames">EvsEnvironmentVcfHostnames</a>

---



