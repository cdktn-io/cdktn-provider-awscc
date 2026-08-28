# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktn/provider-awscc.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline awscc_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaseline(scope: Construct, id: string, config: SsmPatchBaselineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters">putGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">resetApprovedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">resetApprovedPatchesComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">resetApprovedPatchesEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus">resetAvailableSecurityUpdatesComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline">resetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters">resetGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups">resetPatchGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">resetRejectedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">resetRejectedPatchesAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalRules` <a name="putApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules"></a>

```typescript
public putApprovalRules(value: SsmPatchBaselineApprovalRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `putGlobalFilters` <a name="putGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters"></a>

```typescript
public putGlobalFilters(value: SsmPatchBaselineGlobalFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources"></a>

```typescript
public putSources(value: IResolvable | SsmPatchBaselineSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags"></a>

```typescript
public putTags(value: IResolvable | SsmPatchBaselineTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules"></a>

```typescript
public resetApprovalRules(): void
```

##### `resetApprovedPatches` <a name="resetApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```typescript
public resetApprovedPatches(): void
```

##### `resetApprovedPatchesComplianceLevel` <a name="resetApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```typescript
public resetApprovedPatchesComplianceLevel(): void
```

##### `resetApprovedPatchesEnableNonSecurity` <a name="resetApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```typescript
public resetApprovedPatchesEnableNonSecurity(): void
```

##### `resetAvailableSecurityUpdatesComplianceStatus` <a name="resetAvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus"></a>

```typescript
public resetAvailableSecurityUpdatesComplianceStatus(): void
```

##### `resetDefaultBaseline` <a name="resetDefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline"></a>

```typescript
public resetDefaultBaseline(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGlobalFilters` <a name="resetGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters"></a>

```typescript
public resetGlobalFilters(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetPatchGroups` <a name="resetPatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups"></a>

```typescript
public resetPatchGroups(): void
```

##### `resetRejectedPatches` <a name="resetRejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```typescript
public resetRejectedPatches(): void
```

##### `resetRejectedPatchesAction` <a name="resetRejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```typescript
public resetRejectedPatchesAction(): void
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources"></a>

```typescript
public resetSources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

ssmPatchBaseline.SsmPatchBaseline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

ssmPatchBaseline.SsmPatchBaseline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

ssmPatchBaseline.SsmPatchBaseline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmPatchBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters">globalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId">patchBaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput">approvalRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">approvedPatchesComplianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">approvedPatchesEnableNonSecurityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">approvedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput">availableSecurityUpdatesComplianceStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput">defaultBaselineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput">globalFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput">patchGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">rejectedPatchesActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">rejectedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput">sourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">approvedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus">availableSecurityUpdatesComplianceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline">defaultBaseline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups">patchGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">rejectedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules"></a>

```typescript
public readonly approvalRules: SsmPatchBaselineApprovalRulesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a>

---

##### `globalFilters`<sup>Required</sup> <a name="globalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters"></a>

```typescript
public readonly globalFilters: SsmPatchBaselineGlobalFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `patchBaselineId`<sup>Required</sup> <a name="patchBaselineId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId"></a>

```typescript
public readonly patchBaselineId: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources"></a>

```typescript
public readonly sources: SsmPatchBaselineSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```typescript
public readonly tags: SsmPatchBaselineTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a>

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput"></a>

```typescript
public readonly approvalRulesInput: IResolvable | SsmPatchBaselineApprovalRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `approvedPatchesComplianceLevelInput`<sup>Optional</sup> <a name="approvedPatchesComplianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```typescript
public readonly approvedPatchesComplianceLevelInput: string;
```

- *Type:* string

---

##### `approvedPatchesEnableNonSecurityInput`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```typescript
public readonly approvedPatchesEnableNonSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `approvedPatchesInput`<sup>Optional</sup> <a name="approvedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```typescript
public readonly approvedPatchesInput: string[];
```

- *Type:* string[]

---

##### `availableSecurityUpdatesComplianceStatusInput`<sup>Optional</sup> <a name="availableSecurityUpdatesComplianceStatusInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput"></a>

```typescript
public readonly availableSecurityUpdatesComplianceStatusInput: string;
```

- *Type:* string

---

##### `defaultBaselineInput`<sup>Optional</sup> <a name="defaultBaselineInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput"></a>

```typescript
public readonly defaultBaselineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalFiltersInput`<sup>Optional</sup> <a name="globalFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput"></a>

```typescript
public readonly globalFiltersInput: IResolvable | SsmPatchBaselineGlobalFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `patchGroupsInput`<sup>Optional</sup> <a name="patchGroupsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput"></a>

```typescript
public readonly patchGroupsInput: string[];
```

- *Type:* string[]

---

##### `rejectedPatchesActionInput`<sup>Optional</sup> <a name="rejectedPatchesActionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```typescript
public readonly rejectedPatchesActionInput: string;
```

- *Type:* string

---

##### `rejectedPatchesInput`<sup>Optional</sup> <a name="rejectedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```typescript
public readonly rejectedPatchesInput: string[];
```

- *Type:* string[]

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: IResolvable | SsmPatchBaselineSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SsmPatchBaselineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

---

##### `approvedPatches`<sup>Required</sup> <a name="approvedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```typescript
public readonly approvedPatches: string[];
```

- *Type:* string[]

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="approvedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```typescript
public readonly approvedPatchesComplianceLevel: string;
```

- *Type:* string

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```typescript
public readonly approvedPatchesEnableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availableSecurityUpdatesComplianceStatus`<sup>Required</sup> <a name="availableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus"></a>

```typescript
public readonly availableSecurityUpdatesComplianceStatus: string;
```

- *Type:* string

---

##### `defaultBaseline`<sup>Required</sup> <a name="defaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline"></a>

```typescript
public readonly defaultBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `patchGroups`<sup>Required</sup> <a name="patchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups"></a>

```typescript
public readonly patchGroups: string[];
```

- *Type:* string[]

---

##### `rejectedPatches`<sup>Required</sup> <a name="rejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```typescript
public readonly rejectedPatches: string[];
```

- *Type:* string[]

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="rejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```typescript
public readonly rejectedPatchesAction: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRules <a name="SsmPatchBaselineApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineApprovalRules: ssmPatchBaseline.SsmPatchBaselineApprovalRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules">patchRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}. |

---

##### `patchRules`<sup>Optional</sup> <a name="patchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules"></a>

```typescript
public readonly patchRules: IResolvable | SsmPatchBaselineApprovalRulesPatchRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}.

---

### SsmPatchBaselineApprovalRulesPatchRules <a name="SsmPatchBaselineApprovalRulesPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineApprovalRulesPatchRules: ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays">approveAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate">approveUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel">complianceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity">enableNonSecurity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup">patchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | The patch filter group that defines the criteria for the rule. |

---

##### `approveAfterDays`<sup>Optional</sup> <a name="approveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays"></a>

```typescript
public readonly approveAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `approveUntilDate`<sup>Optional</sup> <a name="approveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate"></a>

```typescript
public readonly approveUntilDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `complianceLevel`<sup>Optional</sup> <a name="complianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel"></a>

```typescript
public readonly complianceLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `enableNonSecurity`<sup>Optional</sup> <a name="enableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity"></a>

```typescript
public readonly enableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

##### `patchFilterGroup`<sup>Optional</sup> <a name="patchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup"></a>

```typescript
public readonly patchFilterGroup: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

The patch filter group that defines the criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_filter_group SsmPatchBaseline#patch_filter_group}

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup: ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters">patchFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `patchFilters`<sup>Optional</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters"></a>

```typescript
public readonly patchFilters: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters: ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineConfig: ssmPatchBaseline.SsmPatchBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">name</a></code> | <code>string</code> | The name of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | A set of rules defining the approval rules for a patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">approvedPatches</a></code> | <code>string[]</code> | A list of explicitly approved patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>string</code> | Defines the compliance level for approved patches. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus">availableSecurityUpdatesComplianceStatus</a></code> | <code>string</code> | The compliance status for vendor recommended security updates that are not approved by this patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline">defaultBaseline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set the baseline as default baseline. Only registering to default patch baseline is allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">description</a></code> | <code>string</code> | The description of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters">globalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | A set of global filters used to include patches in the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Defines the operating system the patch baseline applies to. The Default value is WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups">patchGroups</a></code> | <code>string[]</code> | PatchGroups is used to associate instances with a specific patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">rejectedPatches</a></code> | <code>string[]</code> | A list of explicitly rejected patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>string</code> | The action for Patch Manager to take on patches included in the RejectedPackages list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]</code> | Information about the patches to use to update the instances, including target operating systems and source repository. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]</code> | Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules"></a>

```typescript
public readonly approvalRules: SsmPatchBaselineApprovalRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

A set of rules defining the approval rules for a patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approval_rules SsmPatchBaseline#approval_rules}

---

##### `approvedPatches`<sup>Optional</sup> <a name="approvedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```typescript
public readonly approvedPatches: string[];
```

- *Type:* string[]

A list of explicitly approved patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="approvedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```typescript
public readonly approvedPatchesComplianceLevel: string;
```

- *Type:* string

Defines the compliance level for approved patches.

This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```typescript
public readonly approvedPatchesEnableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the list of approved patches includes non-security updates that should be applied to the instances.

The default value is 'false'. Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}

---

##### `availableSecurityUpdatesComplianceStatus`<sup>Optional</sup> <a name="availableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus"></a>

```typescript
public readonly availableSecurityUpdatesComplianceStatus: string;
```

- *Type:* string

The compliance status for vendor recommended security updates that are not approved by this patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}

---

##### `defaultBaseline`<sup>Optional</sup> <a name="defaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline"></a>

```typescript
public readonly defaultBaseline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set the baseline as default baseline. Only registering to default patch baseline is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#default_baseline SsmPatchBaseline#default_baseline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}

---

##### `globalFilters`<sup>Optional</sup> <a name="globalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters"></a>

```typescript
public readonly globalFilters: SsmPatchBaselineGlobalFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

A set of global filters used to include patches in the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#global_filters SsmPatchBaseline#global_filters}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Defines the operating system the patch baseline applies to. The Default value is WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}

---

##### `patchGroups`<sup>Optional</sup> <a name="patchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups"></a>

```typescript
public readonly patchGroups: string[];
```

- *Type:* string[]

PatchGroups is used to associate instances with a specific patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_groups SsmPatchBaseline#patch_groups}

---

##### `rejectedPatches`<sup>Optional</sup> <a name="rejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```typescript
public readonly rejectedPatches: string[];
```

- *Type:* string[]

A list of explicitly rejected patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="rejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```typescript
public readonly rejectedPatchesAction: string;
```

- *Type:* string

The action for Patch Manager to take on patches included in the RejectedPackages list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources"></a>

```typescript
public readonly sources: IResolvable | SsmPatchBaselineSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

Information about the patches to use to update the instances, including target operating systems and source repository.

Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#sources SsmPatchBaseline#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SsmPatchBaselineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}

---

### SsmPatchBaselineGlobalFilters <a name="SsmPatchBaselineGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineGlobalFilters: ssmPatchBaseline.SsmPatchBaselineGlobalFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters">patchFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `patchFilters`<sup>Optional</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters"></a>

```typescript
public readonly patchFilters: IResolvable | SsmPatchBaselineGlobalFiltersPatchFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineGlobalFiltersPatchFilters <a name="SsmPatchBaselineGlobalFiltersPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineGlobalFiltersPatchFilters: ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSources <a name="SsmPatchBaselineSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineSources: ssmPatchBaseline.SsmPatchBaselineSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration">configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products">products</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `products`<sup>Optional</sup> <a name="products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

### SsmPatchBaselineTags <a name="SsmPatchBaselineTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

const ssmPatchBaselineTags: ssmPatchBaseline.SsmPatchBaselineTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRulesOutputReference <a name="SsmPatchBaselineApprovalRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules">putPatchRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules">resetPatchRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchRules` <a name="putPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules"></a>

```typescript
public putPatchRules(value: IResolvable | SsmPatchBaselineApprovalRulesPatchRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

---

##### `resetPatchRules` <a name="resetPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules"></a>

```typescript
public resetPatchRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules">patchRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput">patchRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchRules`<sup>Required</sup> <a name="patchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules"></a>

```typescript
public readonly patchRules: SsmPatchBaselineApprovalRulesPatchRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a>

---

##### `patchRulesInput`<sup>Optional</sup> <a name="patchRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput"></a>

```typescript
public readonly patchRulesInput: IResolvable | SsmPatchBaselineApprovalRulesPatchRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesList <a name="SsmPatchBaselineApprovalRulesPatchRulesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineApprovalRulesPatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRulesPatchRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

---


### SsmPatchBaselineApprovalRulesPatchRulesOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup">putPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays">resetApproveAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate">resetApproveUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel">resetComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity">resetEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup">resetPatchFilterGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilterGroup` <a name="putPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup"></a>

```typescript
public putPatchFilterGroup(value: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `resetApproveAfterDays` <a name="resetApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays"></a>

```typescript
public resetApproveAfterDays(): void
```

##### `resetApproveUntilDate` <a name="resetApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate"></a>

```typescript
public resetApproveUntilDate(): void
```

##### `resetComplianceLevel` <a name="resetComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel"></a>

```typescript
public resetComplianceLevel(): void
```

##### `resetEnableNonSecurity` <a name="resetEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity"></a>

```typescript
public resetEnableNonSecurity(): void
```

##### `resetPatchFilterGroup` <a name="resetPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup"></a>

```typescript
public resetPatchFilterGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup">patchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput">approveAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput">approveUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput">complianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput">enableNonSecurityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput">patchFilterGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays">approveAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate">approveUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel">complianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity">enableNonSecurity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchFilterGroup`<sup>Required</sup> <a name="patchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup"></a>

```typescript
public readonly patchFilterGroup: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a>

---

##### `approveAfterDaysInput`<sup>Optional</sup> <a name="approveAfterDaysInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput"></a>

```typescript
public readonly approveAfterDaysInput: number;
```

- *Type:* number

---

##### `approveUntilDateInput`<sup>Optional</sup> <a name="approveUntilDateInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput"></a>

```typescript
public readonly approveUntilDateInput: string;
```

- *Type:* string

---

##### `complianceLevelInput`<sup>Optional</sup> <a name="complianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput"></a>

```typescript
public readonly complianceLevelInput: string;
```

- *Type:* string

---

##### `enableNonSecurityInput`<sup>Optional</sup> <a name="enableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput"></a>

```typescript
public readonly enableNonSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `patchFilterGroupInput`<sup>Optional</sup> <a name="patchFilterGroupInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput"></a>

```typescript
public readonly patchFilterGroupInput: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `approveAfterDays`<sup>Required</sup> <a name="approveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays"></a>

```typescript
public readonly approveAfterDays: number;
```

- *Type:* number

---

##### `approveUntilDate`<sup>Required</sup> <a name="approveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate"></a>

```typescript
public readonly approveUntilDate: string;
```

- *Type:* string

---

##### `complianceLevel`<sup>Required</sup> <a name="complianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel"></a>

```typescript
public readonly complianceLevel: string;
```

- *Type:* string

---

##### `enableNonSecurity`<sup>Required</sup> <a name="enableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity"></a>

```typescript
public readonly enableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRulesPatchRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters">putPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters">resetPatchFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilters` <a name="putPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters"></a>

```typescript
public putPatchFilters(value: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

---

##### `resetPatchFilters` <a name="resetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters"></a>

```typescript
public resetPatchFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters">patchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput">patchFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchFilters`<sup>Required</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters"></a>

```typescript
public readonly patchFilters: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a>

---

##### `patchFiltersInput`<sup>Optional</sup> <a name="patchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput"></a>

```typescript
public readonly patchFiltersInput: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>

---


### SsmPatchBaselineGlobalFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters">putPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters">resetPatchFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilters` <a name="putPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters"></a>

```typescript
public putPatchFilters(value: IResolvable | SsmPatchBaselineGlobalFiltersPatchFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

---

##### `resetPatchFilters` <a name="resetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters"></a>

```typescript
public resetPatchFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters">patchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput">patchFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchFilters`<sup>Required</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters"></a>

```typescript
public readonly patchFilters: SsmPatchBaselineGlobalFiltersPatchFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a>

---

##### `patchFiltersInput`<sup>Optional</sup> <a name="patchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput"></a>

```typescript
public readonly patchFiltersInput: IResolvable | SsmPatchBaselineGlobalFiltersPatchFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineGlobalFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---


### SsmPatchBaselineGlobalFiltersPatchFiltersList <a name="SsmPatchBaselineGlobalFiltersPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineGlobalFiltersPatchFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

---


### SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineGlobalFiltersPatchFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>

---


### SsmPatchBaselineSourcesList <a name="SsmPatchBaselineSourcesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

---


### SsmPatchBaselineSourcesOutputReference <a name="SsmPatchBaselineSourcesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts">resetProducts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProducts` <a name="resetProducts" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts"></a>

```typescript
public resetProducts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput">productsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput"></a>

```typescript
public readonly productsInput: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>

---


### SsmPatchBaselineTagsList <a name="SsmPatchBaselineTagsList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

---


### SsmPatchBaselineTagsOutputReference <a name="SsmPatchBaselineTagsOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktn/provider-awscc'

new ssmPatchBaseline.SsmPatchBaselineTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>

---



