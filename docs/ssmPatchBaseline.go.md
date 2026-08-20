# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktn/provider-awscc.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline awscc_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaseline(scope Construct, id *string, config SsmPatchBaselineConfig) SsmPatchBaseline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules">PutApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters">PutGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules">ResetApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">ResetApprovedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">ResetApprovedPatchesComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">ResetApprovedPatchesEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus">ResetAvailableSecurityUpdatesComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline">ResetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters">ResetGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups">ResetPatchGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">ResetRejectedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">ResetRejectedPatchesAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalRules` <a name="PutApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules"></a>

```go
func PutApprovalRules(value SsmPatchBaselineApprovalRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `PutGlobalFilters` <a name="PutGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters"></a>

```go
func PutGlobalFilters(value SsmPatchBaselineGlobalFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApprovalRules` <a name="ResetApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules"></a>

```go
func ResetApprovalRules()
```

##### `ResetApprovedPatches` <a name="ResetApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```go
func ResetApprovedPatches()
```

##### `ResetApprovedPatchesComplianceLevel` <a name="ResetApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```go
func ResetApprovedPatchesComplianceLevel()
```

##### `ResetApprovedPatchesEnableNonSecurity` <a name="ResetApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```go
func ResetApprovedPatchesEnableNonSecurity()
```

##### `ResetAvailableSecurityUpdatesComplianceStatus` <a name="ResetAvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus"></a>

```go
func ResetAvailableSecurityUpdatesComplianceStatus()
```

##### `ResetDefaultBaseline` <a name="ResetDefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline"></a>

```go
func ResetDefaultBaseline()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGlobalFilters` <a name="ResetGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters"></a>

```go
func ResetGlobalFilters()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```go
func ResetOperatingSystem()
```

##### `ResetPatchGroups` <a name="ResetPatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups"></a>

```go
func ResetPatchGroups()
```

##### `ResetRejectedPatches` <a name="ResetRejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```go
func ResetRejectedPatches()
```

##### `ResetRejectedPatchesAction` <a name="ResetRejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```go
func ResetRejectedPatchesAction()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources"></a>

```go
func ResetSources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.SsmPatchBaseline_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.SsmPatchBaseline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.SsmPatchBaseline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.SsmPatchBaseline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmPatchBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules">ApprovalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters">GlobalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId">PatchBaselineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput">ApprovalRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">ApprovedPatchesComplianceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">ApprovedPatchesEnableNonSecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">ApprovedPatchesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput">AvailableSecurityUpdatesComplianceStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput">DefaultBaselineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput">GlobalFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput">PatchGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">RejectedPatchesActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">RejectedPatchesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">ApprovedPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus">AvailableSecurityUpdatesComplianceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline">DefaultBaseline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups">PatchGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">RejectedPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalRules`<sup>Required</sup> <a name="ApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules"></a>

```go
func ApprovalRules() SsmPatchBaselineApprovalRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a>

---

##### `GlobalFilters`<sup>Required</sup> <a name="GlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters"></a>

```go
func GlobalFilters() SsmPatchBaselineGlobalFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PatchBaselineId`<sup>Required</sup> <a name="PatchBaselineId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId"></a>

```go
func PatchBaselineId() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources"></a>

```go
func Sources() SsmPatchBaselineSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```go
func Tags() SsmPatchBaselineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a>

---

##### `ApprovalRulesInput`<sup>Optional</sup> <a name="ApprovalRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput"></a>

```go
func ApprovalRulesInput() interface{}
```

- *Type:* interface{}

---

##### `ApprovedPatchesComplianceLevelInput`<sup>Optional</sup> <a name="ApprovedPatchesComplianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```go
func ApprovedPatchesComplianceLevelInput() *string
```

- *Type:* *string

---

##### `ApprovedPatchesEnableNonSecurityInput`<sup>Optional</sup> <a name="ApprovedPatchesEnableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```go
func ApprovedPatchesEnableNonSecurityInput() interface{}
```

- *Type:* interface{}

---

##### `ApprovedPatchesInput`<sup>Optional</sup> <a name="ApprovedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```go
func ApprovedPatchesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvailableSecurityUpdatesComplianceStatusInput`<sup>Optional</sup> <a name="AvailableSecurityUpdatesComplianceStatusInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput"></a>

```go
func AvailableSecurityUpdatesComplianceStatusInput() *string
```

- *Type:* *string

---

##### `DefaultBaselineInput`<sup>Optional</sup> <a name="DefaultBaselineInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput"></a>

```go
func DefaultBaselineInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalFiltersInput`<sup>Optional</sup> <a name="GlobalFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput"></a>

```go
func GlobalFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `PatchGroupsInput`<sup>Optional</sup> <a name="PatchGroupsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput"></a>

```go
func PatchGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RejectedPatchesActionInput`<sup>Optional</sup> <a name="RejectedPatchesActionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```go
func RejectedPatchesActionInput() *string
```

- *Type:* *string

---

##### `RejectedPatchesInput`<sup>Optional</sup> <a name="RejectedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```go
func RejectedPatchesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ApprovedPatches`<sup>Required</sup> <a name="ApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```go
func ApprovedPatches() *[]*string
```

- *Type:* *[]*string

---

##### `ApprovedPatchesComplianceLevel`<sup>Required</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```go
func ApprovedPatchesComplianceLevel() *string
```

- *Type:* *string

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Required</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```go
func ApprovedPatchesEnableNonSecurity() interface{}
```

- *Type:* interface{}

---

##### `AvailableSecurityUpdatesComplianceStatus`<sup>Required</sup> <a name="AvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus"></a>

```go
func AvailableSecurityUpdatesComplianceStatus() *string
```

- *Type:* *string

---

##### `DefaultBaseline`<sup>Required</sup> <a name="DefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline"></a>

```go
func DefaultBaseline() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `PatchGroups`<sup>Required</sup> <a name="PatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups"></a>

```go
func PatchGroups() *[]*string
```

- *Type:* *[]*string

---

##### `RejectedPatches`<sup>Required</sup> <a name="RejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```go
func RejectedPatches() *[]*string
```

- *Type:* *[]*string

---

##### `RejectedPatchesAction`<sup>Required</sup> <a name="RejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```go
func RejectedPatchesAction() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRules <a name="SsmPatchBaselineApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineApprovalRules {
	PatchRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules">PatchRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}. |

---

##### `PatchRules`<sup>Optional</sup> <a name="PatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules"></a>

```go
PatchRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}.

---

### SsmPatchBaselineApprovalRulesPatchRules <a name="SsmPatchBaselineApprovalRulesPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineApprovalRulesPatchRules {
	ApproveAfterDays: *f64,
	ApproveUntilDate: *string,
	ComplianceLevel: *string,
	EnableNonSecurity: interface{},
	PatchFilterGroup: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays">ApproveAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate">ApproveUntilDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel">ComplianceLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup">PatchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | The patch filter group that defines the criteria for the rule. |

---

##### `ApproveAfterDays`<sup>Optional</sup> <a name="ApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays"></a>

```go
ApproveAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `ApproveUntilDate`<sup>Optional</sup> <a name="ApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate"></a>

```go
ApproveUntilDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `ComplianceLevel`<sup>Optional</sup> <a name="ComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel"></a>

```go
ComplianceLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `EnableNonSecurity`<sup>Optional</sup> <a name="EnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity"></a>

```go
EnableNonSecurity interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

##### `PatchFilterGroup`<sup>Optional</sup> <a name="PatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup"></a>

```go
PatchFilterGroup SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

The patch filter group that defines the criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_filter_group SsmPatchBaseline#patch_filter_group}

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup {
	PatchFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters">PatchFilters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `PatchFilters`<sup>Optional</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters"></a>

```go
PatchFilters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ApprovalRules: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules,
	ApprovedPatches: *[]*string,
	ApprovedPatchesComplianceLevel: *string,
	ApprovedPatchesEnableNonSecurity: interface{},
	AvailableSecurityUpdatesComplianceStatus: *string,
	DefaultBaseline: interface{},
	Description: *string,
	GlobalFilters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters,
	OperatingSystem: *string,
	PatchGroups: *[]*string,
	RejectedPatches: *[]*string,
	RejectedPatchesAction: *string,
	Sources: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">Name</a></code> | <code>*string</code> | The name of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules">ApprovalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | A set of rules defining the approval rules for a patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">ApprovedPatches</a></code> | <code>*[]*string</code> | A list of explicitly approved patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>*string</code> | Defines the compliance level for approved patches. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>interface{}</code> | Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus">AvailableSecurityUpdatesComplianceStatus</a></code> | <code>*string</code> | The compliance status for vendor recommended security updates that are not approved by this patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline">DefaultBaseline</a></code> | <code>interface{}</code> | Set the baseline as default baseline. Only registering to default patch baseline is allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">Description</a></code> | <code>*string</code> | The description of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters">GlobalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | A set of global filters used to include patches in the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | Defines the operating system the patch baseline applies to. The Default value is WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups">PatchGroups</a></code> | <code>*[]*string</code> | PatchGroups is used to associate instances with a specific patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">RejectedPatches</a></code> | <code>*[]*string</code> | A list of explicitly rejected patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>*string</code> | The action for Patch Manager to take on patches included in the RejectedPackages list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources">Sources</a></code> | <code>interface{}</code> | Information about the patches to use to update the instances, including target operating systems and source repository. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}

---

##### `ApprovalRules`<sup>Optional</sup> <a name="ApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules"></a>

```go
ApprovalRules SsmPatchBaselineApprovalRules
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

A set of rules defining the approval rules for a patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approval_rules SsmPatchBaseline#approval_rules}

---

##### `ApprovedPatches`<sup>Optional</sup> <a name="ApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```go
ApprovedPatches *[]*string
```

- *Type:* *[]*string

A list of explicitly approved patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}

---

##### `ApprovedPatchesComplianceLevel`<sup>Optional</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```go
ApprovedPatchesComplianceLevel *string
```

- *Type:* *string

Defines the compliance level for approved patches.

This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```go
ApprovedPatchesEnableNonSecurity interface{}
```

- *Type:* interface{}

Indicates whether the list of approved patches includes non-security updates that should be applied to the instances.

The default value is 'false'. Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}

---

##### `AvailableSecurityUpdatesComplianceStatus`<sup>Optional</sup> <a name="AvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus"></a>

```go
AvailableSecurityUpdatesComplianceStatus *string
```

- *Type:* *string

The compliance status for vendor recommended security updates that are not approved by this patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}

---

##### `DefaultBaseline`<sup>Optional</sup> <a name="DefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline"></a>

```go
DefaultBaseline interface{}
```

- *Type:* interface{}

Set the baseline as default baseline. Only registering to default patch baseline is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#default_baseline SsmPatchBaseline#default_baseline}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}

---

##### `GlobalFilters`<sup>Optional</sup> <a name="GlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters"></a>

```go
GlobalFilters SsmPatchBaselineGlobalFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

A set of global filters used to include patches in the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#global_filters SsmPatchBaseline#global_filters}

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

Defines the operating system the patch baseline applies to. The Default value is WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}

---

##### `PatchGroups`<sup>Optional</sup> <a name="PatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups"></a>

```go
PatchGroups *[]*string
```

- *Type:* *[]*string

PatchGroups is used to associate instances with a specific patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_groups SsmPatchBaseline#patch_groups}

---

##### `RejectedPatches`<sup>Optional</sup> <a name="RejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```go
RejectedPatches *[]*string
```

- *Type:* *[]*string

A list of explicitly rejected patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}

---

##### `RejectedPatchesAction`<sup>Optional</sup> <a name="RejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```go
RejectedPatchesAction *string
```

- *Type:* *string

The action for Patch Manager to take on patches included in the RejectedPackages list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

Information about the patches to use to update the instances, including target operating systems and source repository.

Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#sources SsmPatchBaseline#sources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}

---

### SsmPatchBaselineGlobalFilters <a name="SsmPatchBaselineGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineGlobalFilters {
	PatchFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters">PatchFilters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `PatchFilters`<sup>Optional</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters"></a>

```go
PatchFilters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineGlobalFiltersPatchFilters <a name="SsmPatchBaselineGlobalFiltersPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineGlobalFiltersPatchFilters {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSources <a name="SsmPatchBaselineSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineSources {
	Configuration: *string,
	Name: *string,
	Products: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration">Configuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products">Products</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration"></a>

```go
Configuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `Products`<sup>Optional</sup> <a name="Products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products"></a>

```go
Products *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

### SsmPatchBaselineTags <a name="SsmPatchBaselineTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

&ssmpatchbaseline.SsmPatchBaselineTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRulesOutputReference <a name="SsmPatchBaselineApprovalRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineApprovalRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmPatchBaselineApprovalRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules">PutPatchRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules">ResetPatchRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchRules` <a name="PutPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules"></a>

```go
func PutPatchRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPatchRules` <a name="ResetPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules"></a>

```go
func ResetPatchRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules">PatchRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput">PatchRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatchRules`<sup>Required</sup> <a name="PatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules"></a>

```go
func PatchRules() SsmPatchBaselineApprovalRulesPatchRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a>

---

##### `PatchRulesInput`<sup>Optional</sup> <a name="PatchRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput"></a>

```go
func PatchRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineApprovalRulesPatchRulesList <a name="SsmPatchBaselineApprovalRulesPatchRulesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineApprovalRulesPatchRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmPatchBaselineApprovalRulesPatchRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get"></a>

```go
func Get(index *f64) SsmPatchBaselineApprovalRulesPatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineApprovalRulesPatchRulesOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineApprovalRulesPatchRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmPatchBaselineApprovalRulesPatchRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup">PutPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays">ResetApproveAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate">ResetApproveUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel">ResetComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity">ResetEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup">ResetPatchFilterGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchFilterGroup` <a name="PutPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup"></a>

```go
func PutPatchFilterGroup(value SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `ResetApproveAfterDays` <a name="ResetApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays"></a>

```go
func ResetApproveAfterDays()
```

##### `ResetApproveUntilDate` <a name="ResetApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate"></a>

```go
func ResetApproveUntilDate()
```

##### `ResetComplianceLevel` <a name="ResetComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel"></a>

```go
func ResetComplianceLevel()
```

##### `ResetEnableNonSecurity` <a name="ResetEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity"></a>

```go
func ResetEnableNonSecurity()
```

##### `ResetPatchFilterGroup` <a name="ResetPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup"></a>

```go
func ResetPatchFilterGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup">PatchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput">ApproveAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput">ApproveUntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput">ComplianceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput">EnableNonSecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput">PatchFilterGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays">ApproveAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate">ApproveUntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel">ComplianceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatchFilterGroup`<sup>Required</sup> <a name="PatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup"></a>

```go
func PatchFilterGroup() SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a>

---

##### `ApproveAfterDaysInput`<sup>Optional</sup> <a name="ApproveAfterDaysInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput"></a>

```go
func ApproveAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `ApproveUntilDateInput`<sup>Optional</sup> <a name="ApproveUntilDateInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput"></a>

```go
func ApproveUntilDateInput() *string
```

- *Type:* *string

---

##### `ComplianceLevelInput`<sup>Optional</sup> <a name="ComplianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput"></a>

```go
func ComplianceLevelInput() *string
```

- *Type:* *string

---

##### `EnableNonSecurityInput`<sup>Optional</sup> <a name="EnableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput"></a>

```go
func EnableNonSecurityInput() interface{}
```

- *Type:* interface{}

---

##### `PatchFilterGroupInput`<sup>Optional</sup> <a name="PatchFilterGroupInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput"></a>

```go
func PatchFilterGroupInput() interface{}
```

- *Type:* interface{}

---

##### `ApproveAfterDays`<sup>Required</sup> <a name="ApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays"></a>

```go
func ApproveAfterDays() *f64
```

- *Type:* *f64

---

##### `ApproveUntilDate`<sup>Required</sup> <a name="ApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate"></a>

```go
func ApproveUntilDate() *string
```

- *Type:* *string

---

##### `ComplianceLevel`<sup>Required</sup> <a name="ComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel"></a>

```go
func ComplianceLevel() *string
```

- *Type:* *string

---

##### `EnableNonSecurity`<sup>Required</sup> <a name="EnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity"></a>

```go
func EnableNonSecurity() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters">PutPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters">ResetPatchFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchFilters` <a name="PutPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters"></a>

```go
func PutPatchFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPatchFilters` <a name="ResetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters"></a>

```go
func ResetPatchFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters">PatchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput">PatchFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatchFilters`<sup>Required</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters"></a>

```go
func PatchFilters() SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a>

---

##### `PatchFiltersInput`<sup>Optional</sup> <a name="PatchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput"></a>

```go
func PatchFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get"></a>

```go
func Get(index *f64) SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineGlobalFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineGlobalFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmPatchBaselineGlobalFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters">PutPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters">ResetPatchFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchFilters` <a name="PutPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters"></a>

```go
func PutPatchFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPatchFilters` <a name="ResetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters"></a>

```go
func ResetPatchFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters">PatchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput">PatchFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatchFilters`<sup>Required</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters"></a>

```go
func PatchFilters() SsmPatchBaselineGlobalFiltersPatchFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a>

---

##### `PatchFiltersInput`<sup>Optional</sup> <a name="PatchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput"></a>

```go
func PatchFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineGlobalFiltersPatchFiltersList <a name="SsmPatchBaselineGlobalFiltersPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineGlobalFiltersPatchFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmPatchBaselineGlobalFiltersPatchFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get"></a>

```go
func Get(index *f64) SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineGlobalFiltersPatchFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineSourcesList <a name="SsmPatchBaselineSourcesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmPatchBaselineSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get"></a>

```go
func Get(index *f64) SsmPatchBaselineSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineSourcesOutputReference <a name="SsmPatchBaselineSourcesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmPatchBaselineSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts">ResetProducts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProducts` <a name="ResetProducts" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts"></a>

```go
func ResetProducts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput">ProductsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput"></a>

```go
func ConfigurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductsInput`<sup>Optional</sup> <a name="ProductsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput"></a>

```go
func ProductsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineTagsList <a name="SsmPatchBaselineTagsList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmPatchBaselineTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get"></a>

```go
func Get(index *f64) SsmPatchBaselineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmPatchBaselineTagsOutputReference <a name="SsmPatchBaselineTagsOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmpatchbaseline"

ssmpatchbaseline.NewSsmPatchBaselineTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmPatchBaselineTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



