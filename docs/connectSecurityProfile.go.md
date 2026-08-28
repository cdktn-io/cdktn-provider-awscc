# `connectSecurityProfile` Submodule <a name="`connectSecurityProfile` Submodule" id="@cdktn/provider-awscc.connectSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectSecurityProfile <a name="ConnectSecurityProfile" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile awscc_connect_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfile(scope Construct, id *string, config ConnectSecurityProfileConfig) ConnectSecurityProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig">ConnectSecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig">ConnectSecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags">PutAllowedAccessControlTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules">PutAllowedFlowModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications">PutApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration">PutGranularAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlHierarchyGroupId">ResetAllowedAccessControlHierarchyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlTags">ResetAllowedAccessControlTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedFlowModules">ResetAllowedFlowModules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetApplications">ResetApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetGranularAccessControlConfiguration">ResetGranularAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetHierarchyRestrictedResources">ResetHierarchyRestrictedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTagRestrictedResources">ResetTagRestrictedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedAccessControlTags` <a name="PutAllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags"></a>

```go
func PutAllowedAccessControlTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowedFlowModules` <a name="PutAllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules"></a>

```go
func PutAllowedFlowModules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutApplications` <a name="PutApplications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications"></a>

```go
func PutApplications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGranularAccessControlConfiguration` <a name="PutGranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration"></a>

```go
func PutGranularAccessControlConfiguration(value ConnectSecurityProfileGranularAccessControlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedAccessControlHierarchyGroupId` <a name="ResetAllowedAccessControlHierarchyGroupId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlHierarchyGroupId"></a>

```go
func ResetAllowedAccessControlHierarchyGroupId()
```

##### `ResetAllowedAccessControlTags` <a name="ResetAllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlTags"></a>

```go
func ResetAllowedAccessControlTags()
```

##### `ResetAllowedFlowModules` <a name="ResetAllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedFlowModules"></a>

```go
func ResetAllowedFlowModules()
```

##### `ResetApplications` <a name="ResetApplications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetApplications"></a>

```go
func ResetApplications()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGranularAccessControlConfiguration` <a name="ResetGranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetGranularAccessControlConfiguration"></a>

```go
func ResetGranularAccessControlConfiguration()
```

##### `ResetHierarchyRestrictedResources` <a name="ResetHierarchyRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetHierarchyRestrictedResources"></a>

```go
func ResetHierarchyRestrictedResources()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTagRestrictedResources` <a name="ResetTagRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTagRestrictedResources"></a>

```go
func ResetTagRestrictedResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.ConnectSecurityProfile_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.ConnectSecurityProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.ConnectSecurityProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.ConnectSecurityProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTags">AllowedAccessControlTags</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList">ConnectSecurityProfileAllowedAccessControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModules">AllowedFlowModules</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList">ConnectSecurityProfileAllowedFlowModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applications">Applications</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList">ConnectSecurityProfileApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfiguration">GranularAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileArn">SecurityProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList">ConnectSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupIdInput">AllowedAccessControlHierarchyGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTagsInput">AllowedAccessControlTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModulesInput">AllowedFlowModulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applicationsInput">ApplicationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfigurationInput">GranularAccessControlConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResourcesInput">HierarchyRestrictedResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileNameInput">SecurityProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResourcesInput">TagRestrictedResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId">AllowedAccessControlHierarchyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResources">HierarchyRestrictedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileName">SecurityProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResources">TagRestrictedResources</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedAccessControlTags`<sup>Required</sup> <a name="AllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTags"></a>

```go
func AllowedAccessControlTags() ConnectSecurityProfileAllowedAccessControlTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList">ConnectSecurityProfileAllowedAccessControlTagsList</a>

---

##### `AllowedFlowModules`<sup>Required</sup> <a name="AllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModules"></a>

```go
func AllowedFlowModules() ConnectSecurityProfileAllowedFlowModulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList">ConnectSecurityProfileAllowedFlowModulesList</a>

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applications"></a>

```go
func Applications() ConnectSecurityProfileApplicationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList">ConnectSecurityProfileApplicationsList</a>

---

##### `GranularAccessControlConfiguration`<sup>Required</sup> <a name="GranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfiguration"></a>

```go
func GranularAccessControlConfiguration() ConnectSecurityProfileGranularAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedRegion"></a>

```go
func LastModifiedRegion() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `SecurityProfileArn`<sup>Required</sup> <a name="SecurityProfileArn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileArn"></a>

```go
func SecurityProfileArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tags"></a>

```go
func Tags() ConnectSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList">ConnectSecurityProfileTagsList</a>

---

##### `AllowedAccessControlHierarchyGroupIdInput`<sup>Optional</sup> <a name="AllowedAccessControlHierarchyGroupIdInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupIdInput"></a>

```go
func AllowedAccessControlHierarchyGroupIdInput() *string
```

- *Type:* *string

---

##### `AllowedAccessControlTagsInput`<sup>Optional</sup> <a name="AllowedAccessControlTagsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTagsInput"></a>

```go
func AllowedAccessControlTagsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedFlowModulesInput`<sup>Optional</sup> <a name="AllowedFlowModulesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModulesInput"></a>

```go
func AllowedFlowModulesInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationsInput`<sup>Optional</sup> <a name="ApplicationsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applicationsInput"></a>

```go
func ApplicationsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GranularAccessControlConfigurationInput`<sup>Optional</sup> <a name="GranularAccessControlConfigurationInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfigurationInput"></a>

```go
func GranularAccessControlConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `HierarchyRestrictedResourcesInput`<sup>Optional</sup> <a name="HierarchyRestrictedResourcesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResourcesInput"></a>

```go
func HierarchyRestrictedResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityProfileNameInput`<sup>Optional</sup> <a name="SecurityProfileNameInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileNameInput"></a>

```go
func SecurityProfileNameInput() *string
```

- *Type:* *string

---

##### `TagRestrictedResourcesInput`<sup>Optional</sup> <a name="TagRestrictedResourcesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResourcesInput"></a>

```go
func TagRestrictedResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAccessControlHierarchyGroupId`<sup>Required</sup> <a name="AllowedAccessControlHierarchyGroupId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId"></a>

```go
func AllowedAccessControlHierarchyGroupId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HierarchyRestrictedResources`<sup>Required</sup> <a name="HierarchyRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResources"></a>

```go
func HierarchyRestrictedResources() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityProfileName`<sup>Required</sup> <a name="SecurityProfileName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileName"></a>

```go
func SecurityProfileName() *string
```

- *Type:* *string

---

##### `TagRestrictedResources`<sup>Required</sup> <a name="TagRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResources"></a>

```go
func TagRestrictedResources() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectSecurityProfileAllowedAccessControlTags <a name="ConnectSecurityProfileAllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileAllowedAccessControlTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}

---

### ConnectSecurityProfileAllowedFlowModules <a name="ConnectSecurityProfileAllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileAllowedFlowModules {
	FlowModuleId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.flowModuleId">FlowModuleId</a></code> | <code>*string</code> | The identifier of the application that you want to give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.type">Type</a></code> | <code>*string</code> | The type of the first-party application. |

---

##### `FlowModuleId`<sup>Optional</sup> <a name="FlowModuleId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.flowModuleId"></a>

```go
FlowModuleId *string
```

- *Type:* *string

The identifier of the application that you want to give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#flow_module_id ConnectSecurityProfile#flow_module_id}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the first-party application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}

---

### ConnectSecurityProfileApplications <a name="ConnectSecurityProfileApplications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileApplications {
	ApplicationPermissions: *[]*string,
	Namespace: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.applicationPermissions">ApplicationPermissions</a></code> | <code>*[]*string</code> | The permissions that the agent is granted on the application. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the application that you want to give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.type">Type</a></code> | <code>*string</code> | The type of the application. |

---

##### `ApplicationPermissions`<sup>Optional</sup> <a name="ApplicationPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.applicationPermissions"></a>

```go
ApplicationPermissions *[]*string
```

- *Type:* *[]*string

The permissions that the agent is granted on the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#application_permissions ConnectSecurityProfile#application_permissions}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the application that you want to give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#namespace ConnectSecurityProfile#namespace}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}

---

### ConnectSecurityProfileConfig <a name="ConnectSecurityProfileConfig" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	SecurityProfileName: *string,
	AllowedAccessControlHierarchyGroupId: *string,
	AllowedAccessControlTags: interface{},
	AllowedFlowModules: interface{},
	Applications: interface{},
	Description: *string,
	GranularAccessControlConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration,
	HierarchyRestrictedResources: *[]*string,
	Permissions: *[]*string,
	TagRestrictedResources: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.securityProfileName">SecurityProfileName</a></code> | <code>*string</code> | The name of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlHierarchyGroupId">AllowedAccessControlHierarchyGroupId</a></code> | <code>*string</code> | The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlTags">AllowedAccessControlTags</a></code> | <code>interface{}</code> | The list of tags that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedFlowModules">AllowedFlowModules</a></code> | <code>interface{}</code> | The list of flow-module resources to be linked to a security profile in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.applications">Applications</a></code> | <code>interface{}</code> | A list of third-party applications that the security profile will give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.description">Description</a></code> | <code>*string</code> | The description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.granularAccessControlConfiguration">GranularAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.hierarchyRestrictedResources">HierarchyRestrictedResources</a></code> | <code>*[]*string</code> | The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.permissions">Permissions</a></code> | <code>*[]*string</code> | Permissions assigned to the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tagRestrictedResources">TagRestrictedResources</a></code> | <code>*[]*string</code> | The list of resources that a security profile applies tag restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags used to organize, track, or control access for this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#instance_arn ConnectSecurityProfile#instance_arn}

---

##### `SecurityProfileName`<sup>Required</sup> <a name="SecurityProfileName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.securityProfileName"></a>

```go
SecurityProfileName *string
```

- *Type:* *string

The name of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#security_profile_name ConnectSecurityProfile#security_profile_name}

---

##### `AllowedAccessControlHierarchyGroupId`<sup>Optional</sup> <a name="AllowedAccessControlHierarchyGroupId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlHierarchyGroupId"></a>

```go
AllowedAccessControlHierarchyGroupId *string
```

- *Type:* *string

The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#allowed_access_control_hierarchy_group_id ConnectSecurityProfile#allowed_access_control_hierarchy_group_id}

---

##### `AllowedAccessControlTags`<sup>Optional</sup> <a name="AllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlTags"></a>

```go
AllowedAccessControlTags interface{}
```

- *Type:* interface{}

The list of tags that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#allowed_access_control_tags ConnectSecurityProfile#allowed_access_control_tags}

---

##### `AllowedFlowModules`<sup>Optional</sup> <a name="AllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedFlowModules"></a>

```go
AllowedFlowModules interface{}
```

- *Type:* interface{}

The list of flow-module resources to be linked to a security profile in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#allowed_flow_modules ConnectSecurityProfile#allowed_flow_modules}

---

##### `Applications`<sup>Optional</sup> <a name="Applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.applications"></a>

```go
Applications interface{}
```

- *Type:* interface{}

A list of third-party applications that the security profile will give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#applications ConnectSecurityProfile#applications}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#description ConnectSecurityProfile#description}

---

##### `GranularAccessControlConfiguration`<sup>Optional</sup> <a name="GranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.granularAccessControlConfiguration"></a>

```go
GranularAccessControlConfiguration ConnectSecurityProfileGranularAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}.

---

##### `HierarchyRestrictedResources`<sup>Optional</sup> <a name="HierarchyRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.hierarchyRestrictedResources"></a>

```go
HierarchyRestrictedResources *[]*string
```

- *Type:* *[]*string

The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#hierarchy_restricted_resources ConnectSecurityProfile#hierarchy_restricted_resources}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

Permissions assigned to the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#permissions ConnectSecurityProfile#permissions}

---

##### `TagRestrictedResources`<sup>Optional</sup> <a name="TagRestrictedResources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tagRestrictedResources"></a>

```go
TagRestrictedResources *[]*string
```

- *Type:* *[]*string

The list of resources that a security profile applies tag restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#tag_restricted_resources ConnectSecurityProfile#tag_restricted_resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#tags ConnectSecurityProfile#tags}

---

### ConnectSecurityProfileGranularAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileGranularAccessControlConfiguration {
	DataTableAccessControlConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.property.dataTableAccessControlConfiguration">DataTableAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | Defines the access control configuration for data tables. |

---

##### `DataTableAccessControlConfiguration`<sup>Optional</sup> <a name="DataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.property.dataTableAccessControlConfiguration"></a>

```go
DataTableAccessControlConfiguration ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

Defines the access control configuration for data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#data_table_access_control_configuration ConnectSecurityProfile#data_table_access_control_configuration}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration {
	PrimaryAttributeAccessControlConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.property.primaryAttributeAccessControlConfiguration">PrimaryAttributeAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | Contains the configuration for record-based access control. |

---

##### `PrimaryAttributeAccessControlConfiguration`<sup>Optional</sup> <a name="PrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.property.primaryAttributeAccessControlConfiguration"></a>

```go
PrimaryAttributeAccessControlConfiguration ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

Contains the configuration for record-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#primary_attribute_access_control_configuration ConnectSecurityProfile#primary_attribute_access_control_configuration}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration {
	PrimaryAttributeValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.property.primaryAttributeValues">PrimaryAttributeValues</a></code> | <code>interface{}</code> | An array of PrimaryAttributeValue objects. |

---

##### `PrimaryAttributeValues`<sup>Optional</sup> <a name="PrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.property.primaryAttributeValues"></a>

```go
PrimaryAttributeValues interface{}
```

- *Type:* interface{}

An array of PrimaryAttributeValue objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#primary_attribute_values ConnectSecurityProfile#primary_attribute_values}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues {
	AccessType: *string,
	AttributeName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.accessType">AccessType</a></code> | <code>*string</code> | Specifies the type of access granted. Currently, only "ALLOW" is supported. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.attributeName">AttributeName</a></code> | <code>*string</code> | The name of the primary attribute. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.values">Values</a></code> | <code>*[]*string</code> | An array of allowed primary values for the specified primary attribute. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Specifies the type of access granted. Currently, only "ALLOW" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#access_type ConnectSecurityProfile#access_type}

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

The name of the primary attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#attribute_name ConnectSecurityProfile#attribute_name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of allowed primary values for the specified primary attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#values ConnectSecurityProfile#values}

---

### ConnectSecurityProfileTags <a name="ConnectSecurityProfileTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

&connectsecurityprofile.ConnectSecurityProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectSecurityProfileAllowedAccessControlTagsList <a name="ConnectSecurityProfileAllowedAccessControlTagsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileAllowedAccessControlTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectSecurityProfileAllowedAccessControlTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get"></a>

```go
func Get(index *f64) ConnectSecurityProfileAllowedAccessControlTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileAllowedAccessControlTagsOutputReference <a name="ConnectSecurityProfileAllowedAccessControlTagsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileAllowedAccessControlTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectSecurityProfileAllowedAccessControlTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileAllowedFlowModulesList <a name="ConnectSecurityProfileAllowedFlowModulesList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileAllowedFlowModulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectSecurityProfileAllowedFlowModulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get"></a>

```go
func Get(index *f64) ConnectSecurityProfileAllowedFlowModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileAllowedFlowModulesOutputReference <a name="ConnectSecurityProfileAllowedFlowModulesOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileAllowedFlowModulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectSecurityProfileAllowedFlowModulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetFlowModuleId">ResetFlowModuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlowModuleId` <a name="ResetFlowModuleId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetFlowModuleId"></a>

```go
func ResetFlowModuleId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleIdInput">FlowModuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId">FlowModuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowModuleIdInput`<sup>Optional</sup> <a name="FlowModuleIdInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleIdInput"></a>

```go
func FlowModuleIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FlowModuleId`<sup>Required</sup> <a name="FlowModuleId" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId"></a>

```go
func FlowModuleId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileApplicationsList <a name="ConnectSecurityProfileApplicationsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileApplicationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectSecurityProfileApplicationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get"></a>

```go
func Get(index *f64) ConnectSecurityProfileApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileApplicationsOutputReference <a name="ConnectSecurityProfileApplicationsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectSecurityProfileApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetApplicationPermissions">ResetApplicationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationPermissions` <a name="ResetApplicationPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetApplicationPermissions"></a>

```go
func ResetApplicationPermissions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissionsInput">ApplicationPermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions">ApplicationPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationPermissionsInput`<sup>Optional</sup> <a name="ApplicationPermissionsInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissionsInput"></a>

```go
func ApplicationPermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApplicationPermissions`<sup>Required</sup> <a name="ApplicationPermissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions"></a>

```go
func ApplicationPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration">PutPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resetPrimaryAttributeAccessControlConfiguration">ResetPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryAttributeAccessControlConfiguration` <a name="PutPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration"></a>

```go
func PutPrimaryAttributeAccessControlConfiguration(value ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---

##### `ResetPrimaryAttributeAccessControlConfiguration` <a name="ResetPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resetPrimaryAttributeAccessControlConfiguration"></a>

```go
func ResetPrimaryAttributeAccessControlConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration">PrimaryAttributeAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfigurationInput">PrimaryAttributeAccessControlConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryAttributeAccessControlConfiguration`<sup>Required</sup> <a name="PrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration"></a>

```go
func PrimaryAttributeAccessControlConfiguration() ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a>

---

##### `PrimaryAttributeAccessControlConfigurationInput`<sup>Optional</sup> <a name="PrimaryAttributeAccessControlConfigurationInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfigurationInput"></a>

```go
func PrimaryAttributeAccessControlConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues">PutPrimaryAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resetPrimaryAttributeValues">ResetPrimaryAttributeValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryAttributeValues` <a name="PutPrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues"></a>

```go
func PutPrimaryAttributeValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrimaryAttributeValues` <a name="ResetPrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resetPrimaryAttributeValues"></a>

```go
func ResetPrimaryAttributeValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues">PrimaryAttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValuesInput">PrimaryAttributeValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryAttributeValues`<sup>Required</sup> <a name="PrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues"></a>

```go
func PrimaryAttributeValues() ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a>

---

##### `PrimaryAttributeValuesInput`<sup>Optional</sup> <a name="PrimaryAttributeValuesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValuesInput"></a>

```go
func PrimaryAttributeValuesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get"></a>

```go
func Get(index *f64) ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileGranularAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileGranularAccessControlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectSecurityProfileGranularAccessControlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration">PutDataTableAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resetDataTableAccessControlConfiguration">ResetDataTableAccessControlConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataTableAccessControlConfiguration` <a name="PutDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration"></a>

```go
func PutDataTableAccessControlConfiguration(value ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---

##### `ResetDataTableAccessControlConfiguration` <a name="ResetDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resetDataTableAccessControlConfiguration"></a>

```go
func ResetDataTableAccessControlConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration">DataTableAccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfigurationInput">DataTableAccessControlConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTableAccessControlConfiguration`<sup>Required</sup> <a name="DataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration"></a>

```go
func DataTableAccessControlConfiguration() ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a>

---

##### `DataTableAccessControlConfigurationInput`<sup>Optional</sup> <a name="DataTableAccessControlConfigurationInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfigurationInput"></a>

```go
func DataTableAccessControlConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileTagsList <a name="ConnectSecurityProfileTagsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectSecurityProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get"></a>

```go
func Get(index *f64) ConnectSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectSecurityProfileTagsOutputReference <a name="ConnectSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectsecurityprofile"

connectsecurityprofile.NewConnectSecurityProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectSecurityProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



