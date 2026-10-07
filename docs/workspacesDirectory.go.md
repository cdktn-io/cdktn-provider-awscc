# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktn/provider-awscc.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory awscc_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectory(scope Construct, id *string, config WorkspacesDirectoryConfig) WorkspacesDirectory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig">PutActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties">PutCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig">PutMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties">PutSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions">PutSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties">PutStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">PutWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">PutWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig">ResetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties">ResetCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService">ResetEnableSelfService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode">ResetEndpointEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn">ResetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">ResetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig">ResetMicrosoftEntraConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties">ResetSamlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions">ResetSelfservicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties">ResetStreamingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType">ResetUserIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">ResetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">ResetWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription">ResetWorkspaceDirectoryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName">ResetWorkspaceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType">ResetWorkspaceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActiveDirectoryConfig` <a name="PutActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig"></a>

```go
func PutActiveDirectoryConfig(value WorkspacesDirectoryActiveDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

---

##### `PutCertificateBasedAuthProperties` <a name="PutCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties"></a>

```go
func PutCertificateBasedAuthProperties(value WorkspacesDirectoryCertificateBasedAuthProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putCertificateBasedAuthProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

---

##### `PutMicrosoftEntraConfig` <a name="PutMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig"></a>

```go
func PutMicrosoftEntraConfig(value WorkspacesDirectoryMicrosoftEntraConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putMicrosoftEntraConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

---

##### `PutSamlProperties` <a name="PutSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties"></a>

```go
func PutSamlProperties(value WorkspacesDirectorySamlProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSamlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

---

##### `PutSelfservicePermissions` <a name="PutSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions"></a>

```go
func PutSelfservicePermissions(value WorkspacesDirectorySelfservicePermissions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putSelfservicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

---

##### `PutStreamingProperties` <a name="PutStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties"></a>

```go
func PutStreamingProperties(value WorkspacesDirectoryStreamingProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putStreamingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWorkspaceAccessProperties` <a name="PutWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```go
func PutWorkspaceAccessProperties(value WorkspacesDirectoryWorkspaceAccessProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `PutWorkspaceCreationProperties` <a name="PutWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```go
func PutWorkspaceCreationProperties(value WorkspacesDirectoryWorkspaceCreationProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `ResetActiveDirectoryConfig` <a name="ResetActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetActiveDirectoryConfig"></a>

```go
func ResetActiveDirectoryConfig()
```

##### `ResetCertificateBasedAuthProperties` <a name="ResetCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetCertificateBasedAuthProperties"></a>

```go
func ResetCertificateBasedAuthProperties()
```

##### `ResetEnableSelfService` <a name="ResetEnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEnableSelfService"></a>

```go
func ResetEnableSelfService()
```

##### `ResetEndpointEncryptionMode` <a name="ResetEndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetEndpointEncryptionMode"></a>

```go
func ResetEndpointEncryptionMode()
```

##### `ResetIdcInstanceArn` <a name="ResetIdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIdcInstanceArn"></a>

```go
func ResetIdcInstanceArn()
```

##### `ResetIpGroupIds` <a name="ResetIpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```go
func ResetIpGroupIds()
```

##### `ResetMicrosoftEntraConfig` <a name="ResetMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetMicrosoftEntraConfig"></a>

```go
func ResetMicrosoftEntraConfig()
```

##### `ResetSamlProperties` <a name="ResetSamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSamlProperties"></a>

```go
func ResetSamlProperties()
```

##### `ResetSelfservicePermissions` <a name="ResetSelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSelfservicePermissions"></a>

```go
func ResetSelfservicePermissions()
```

##### `ResetStreamingProperties` <a name="ResetStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetStreamingProperties"></a>

```go
func ResetStreamingProperties()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetTenancy"></a>

```go
func ResetTenancy()
```

##### `ResetUserIdentityType` <a name="ResetUserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetUserIdentityType"></a>

```go
func ResetUserIdentityType()
```

##### `ResetWorkspaceAccessProperties` <a name="ResetWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```go
func ResetWorkspaceAccessProperties()
```

##### `ResetWorkspaceCreationProperties` <a name="ResetWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```go
func ResetWorkspaceCreationProperties()
```

##### `ResetWorkspaceDirectoryDescription` <a name="ResetWorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryDescription"></a>

```go
func ResetWorkspaceDirectoryDescription()
```

##### `ResetWorkspaceDirectoryName` <a name="ResetWorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceDirectoryName"></a>

```go
func ResetWorkspaceDirectoryName()
```

##### `ResetWorkspaceType` <a name="ResetWorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.resetWorkspaceType"></a>

```go
func ResetWorkspaceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.WorkspacesDirectory_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspacesDirectory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspacesDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName">CustomerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName">DirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType">DirectoryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses">DnsIpv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">IamRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig">IdcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig">MicrosoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode">RegistrationCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties">SamlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions">SelfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties">StreamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">WorkspaceSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput">ActiveDirectoryConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput">CertificateBasedAuthPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput">EnableSelfServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput">EndpointEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">IpGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput">MicrosoftEntraConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput">SamlPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput">SelfservicePermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput">StreamingPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput">UserIdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">WorkspaceAccessPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">WorkspaceCreationPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput">WorkspaceDirectoryDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput">WorkspaceDirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput">WorkspaceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService">EnableSelfService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode">EndpointEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">IpGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType">UserIdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription">WorkspaceDirectoryDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName">WorkspaceDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType">WorkspaceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveDirectoryConfig`<sup>Required</sup> <a name="ActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfig"></a>

```go
func ActiveDirectoryConfig() WorkspacesDirectoryActiveDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference">WorkspacesDirectoryActiveDirectoryConfigOutputReference</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CertificateBasedAuthProperties`<sup>Required</sup> <a name="CertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthProperties"></a>

```go
func CertificateBasedAuthProperties() WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference">WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference</a>

---

##### `CustomerUserName`<sup>Required</sup> <a name="CustomerUserName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```go
func CustomerUserName() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```go
func DirectoryName() *string
```

- *Type:* *string

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```go
func DirectoryType() *string
```

- *Type:* *string

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```go
func DnsIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `DnsIpv6Addresses`<sup>Required</sup> <a name="DnsIpv6Addresses" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.dnsIpv6Addresses"></a>

```go
func DnsIpv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `IamRoleId`<sup>Required</sup> <a name="IamRoleId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```go
func IamRoleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcConfig`<sup>Required</sup> <a name="IdcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcConfig"></a>

```go
func IdcConfig() WorkspacesDirectoryIdcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference">WorkspacesDirectoryIdcConfigOutputReference</a>

---

##### `MicrosoftEntraConfig`<sup>Required</sup> <a name="MicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfig"></a>

```go
func MicrosoftEntraConfig() WorkspacesDirectoryMicrosoftEntraConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference">WorkspacesDirectoryMicrosoftEntraConfigOutputReference</a>

---

##### `RegistrationCode`<sup>Required</sup> <a name="RegistrationCode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```go
func RegistrationCode() *string
```

- *Type:* *string

---

##### `SamlProperties`<sup>Required</sup> <a name="SamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlProperties"></a>

```go
func SamlProperties() WorkspacesDirectorySamlPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference">WorkspacesDirectorySamlPropertiesOutputReference</a>

---

##### `SelfservicePermissions`<sup>Required</sup> <a name="SelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissions"></a>

```go
func SelfservicePermissions() WorkspacesDirectorySelfservicePermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference">WorkspacesDirectorySelfservicePermissionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StreamingProperties`<sup>Required</sup> <a name="StreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingProperties"></a>

```go
func StreamingProperties() WorkspacesDirectoryStreamingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference">WorkspacesDirectoryStreamingPropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```go
func Tags() WorkspacesDirectoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList">WorkspacesDirectoryTagsList</a>

---

##### `WorkspaceAccessProperties`<sup>Required</sup> <a name="WorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```go
func WorkspaceAccessProperties() WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `WorkspaceCreationProperties`<sup>Required</sup> <a name="WorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```go
func WorkspaceCreationProperties() WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `WorkspaceSecurityGroupId`<sup>Required</sup> <a name="WorkspaceSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```go
func WorkspaceSecurityGroupId() *string
```

- *Type:* *string

---

##### `ActiveDirectoryConfigInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.activeDirectoryConfigInput"></a>

```go
func ActiveDirectoryConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateBasedAuthPropertiesInput`<sup>Optional</sup> <a name="CertificateBasedAuthPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.certificateBasedAuthPropertiesInput"></a>

```go
func CertificateBasedAuthPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSelfServiceInput`<sup>Optional</sup> <a name="EnableSelfServiceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfServiceInput"></a>

```go
func EnableSelfServiceInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointEncryptionModeInput`<sup>Optional</sup> <a name="EndpointEncryptionModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionModeInput"></a>

```go
func EndpointEncryptionModeInput() *string
```

- *Type:* *string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArnInput"></a>

```go
func IdcInstanceArnInput() *string
```

- *Type:* *string

---

##### `IpGroupIdsInput`<sup>Optional</sup> <a name="IpGroupIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```go
func IpGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MicrosoftEntraConfigInput`<sup>Optional</sup> <a name="MicrosoftEntraConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.microsoftEntraConfigInput"></a>

```go
func MicrosoftEntraConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SamlPropertiesInput`<sup>Optional</sup> <a name="SamlPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.samlPropertiesInput"></a>

```go
func SamlPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `SelfservicePermissionsInput`<sup>Optional</sup> <a name="SelfservicePermissionsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.selfservicePermissionsInput"></a>

```go
func SelfservicePermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `StreamingPropertiesInput`<sup>Optional</sup> <a name="StreamingPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.streamingPropertiesInput"></a>

```go
func StreamingPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `UserIdentityTypeInput`<sup>Optional</sup> <a name="UserIdentityTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityTypeInput"></a>

```go
func UserIdentityTypeInput() *string
```

- *Type:* *string

---

##### `WorkspaceAccessPropertiesInput`<sup>Optional</sup> <a name="WorkspaceAccessPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```go
func WorkspaceAccessPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceCreationPropertiesInput`<sup>Optional</sup> <a name="WorkspaceCreationPropertiesInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```go
func WorkspaceCreationPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceDirectoryDescriptionInput`<sup>Optional</sup> <a name="WorkspaceDirectoryDescriptionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescriptionInput"></a>

```go
func WorkspaceDirectoryDescriptionInput() *string
```

- *Type:* *string

---

##### `WorkspaceDirectoryNameInput`<sup>Optional</sup> <a name="WorkspaceDirectoryNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryNameInput"></a>

```go
func WorkspaceDirectoryNameInput() *string
```

- *Type:* *string

---

##### `WorkspaceTypeInput`<sup>Optional</sup> <a name="WorkspaceTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceTypeInput"></a>

```go
func WorkspaceTypeInput() *string
```

- *Type:* *string

---

##### `EnableSelfService`<sup>Required</sup> <a name="EnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.enableSelfService"></a>

```go
func EnableSelfService() interface{}
```

- *Type:* interface{}

---

##### `EndpointEncryptionMode`<sup>Required</sup> <a name="EndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.endpointEncryptionMode"></a>

```go
func EndpointEncryptionMode() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `IpGroupIds`<sup>Required</sup> <a name="IpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```go
func IpGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `UserIdentityType`<sup>Required</sup> <a name="UserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.userIdentityType"></a>

```go
func UserIdentityType() *string
```

- *Type:* *string

---

##### `WorkspaceDirectoryDescription`<sup>Required</sup> <a name="WorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryDescription"></a>

```go
func WorkspaceDirectoryDescription() *string
```

- *Type:* *string

---

##### `WorkspaceDirectoryName`<sup>Required</sup> <a name="WorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceDirectoryName"></a>

```go
func WorkspaceDirectoryName() *string
```

- *Type:* *string

---

##### `WorkspaceType`<sup>Required</sup> <a name="WorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.workspaceType"></a>

```go
func WorkspaceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryActiveDirectoryConfig <a name="WorkspacesDirectoryActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryActiveDirectoryConfig {
	DomainName: *string,
	ServiceAccountSecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn">ServiceAccountSecretArn</a></code> | <code>*string</code> | Indicates the secret ARN on the service account. |

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}

---

##### `ServiceAccountSecretArn`<sup>Optional</sup> <a name="ServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig.property.serviceAccountSecretArn"></a>

```go
ServiceAccountSecretArn *string
```

- *Type:* *string

Indicates the secret ARN on the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}

---

### WorkspacesDirectoryCertificateBasedAuthProperties <a name="WorkspacesDirectoryCertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryCertificateBasedAuthProperties {
	CertificateAuthorityArn: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status">Status</a></code> | <code>*string</code> | The status of the certificate-based authentication properties. |

---

##### `CertificateAuthorityArn`<sup>Optional</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```go
CertificateAuthorityArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the certificate-based authentication properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActiveDirectoryConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig,
	CertificateBasedAuthProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties,
	EnableSelfService: interface{},
	EndpointEncryptionMode: *string,
	IdcInstanceArn: *string,
	IpGroupIds: *[]*string,
	MicrosoftEntraConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig,
	SamlProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectorySamlProperties,
	SelfservicePermissions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions,
	StreamingProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties,
	SubnetIds: *[]*string,
	Tags: interface{},
	Tenancy: *string,
	UserIdentityType: *string,
	WorkspaceAccessProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties,
	WorkspaceCreationProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties,
	WorkspaceDirectoryDescription: *string,
	WorkspaceDirectoryName: *string,
	WorkspaceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig">ActiveDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a></code> | Information about the Active Directory config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a></code> | Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService">EnableSelfService</a></code> | <code>interface{}</code> | Indicates whether self-service capabilities are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode">EndpointEncryptionMode</a></code> | <code>*string</code> | Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the identity center instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">IpGroupIds</a></code> | <code>*[]*string</code> | The identifiers of the IP access control groups associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig">MicrosoftEntraConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a></code> | Specifies the configurations of the Microsoft Entra. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties">SamlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a></code> | Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions">SelfservicePermissions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a></code> | Describes the self-service permissions for a directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties">StreamingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a></code> | Describes the streaming properties. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The identifiers of the subnets for your virtual private cloud (VPC). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy">Tenancy</a></code> | <code>*string</code> | Indicates whether your WorkSpace directory is dedicated or shared. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType">UserIdentityType</a></code> | <code>*string</code> | The type of identity management the user is using. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">WorkspaceAccessProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | The device types and operating systems that can be used to access a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">WorkspaceCreationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | The default values that are used to create WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription">WorkspaceDirectoryDescription</a></code> | <code>*string</code> | Description of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName">WorkspaceDirectoryName</a></code> | <code>*string</code> | The name of the directory to register. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType">WorkspaceType</a></code> | <code>*string</code> | Indicates whether the directory's WorkSpace type is personal or pools. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveDirectoryConfig`<sup>Optional</sup> <a name="ActiveDirectoryConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.activeDirectoryConfig"></a>

```go
ActiveDirectoryConfig WorkspacesDirectoryActiveDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfig">WorkspacesDirectoryActiveDirectoryConfig</a>

Information about the Active Directory config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}

---

##### `CertificateBasedAuthProperties`<sup>Optional</sup> <a name="CertificateBasedAuthProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.certificateBasedAuthProperties"></a>

```go
CertificateBasedAuthProperties WorkspacesDirectoryCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthProperties">WorkspacesDirectoryCertificateBasedAuthProperties</a>

Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}

---

##### `EnableSelfService`<sup>Optional</sup> <a name="EnableSelfService" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.enableSelfService"></a>

```go
EnableSelfService interface{}
```

- *Type:* interface{}

Indicates whether self-service capabilities are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_self_service WorkspacesDirectory#enable_self_service}

---

##### `EndpointEncryptionMode`<sup>Optional</sup> <a name="EndpointEncryptionMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.endpointEncryptionMode"></a>

```go
EndpointEncryptionMode *string
```

- *Type:* *string

Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#endpoint_encryption_mode WorkspacesDirectory#endpoint_encryption_mode}

---

##### `IdcInstanceArn`<sup>Optional</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.idcInstanceArn"></a>

```go
IdcInstanceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the identity center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#idc_instance_arn WorkspacesDirectory#idc_instance_arn}

---

##### `IpGroupIds`<sup>Optional</sup> <a name="IpGroupIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```go
IpGroupIds *[]*string
```

- *Type:* *[]*string

The identifiers of the IP access control groups associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}

---

##### `MicrosoftEntraConfig`<sup>Optional</sup> <a name="MicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.microsoftEntraConfig"></a>

```go
MicrosoftEntraConfig WorkspacesDirectoryMicrosoftEntraConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig">WorkspacesDirectoryMicrosoftEntraConfig</a>

Specifies the configurations of the Microsoft Entra.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#microsoft_entra_config WorkspacesDirectory#microsoft_entra_config}

---

##### `SamlProperties`<sup>Optional</sup> <a name="SamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.samlProperties"></a>

```go
SamlProperties WorkspacesDirectorySamlProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties">WorkspacesDirectorySamlProperties</a>

Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}

---

##### `SelfservicePermissions`<sup>Optional</sup> <a name="SelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.selfservicePermissions"></a>

```go
SelfservicePermissions WorkspacesDirectorySelfservicePermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions">WorkspacesDirectorySelfservicePermissions</a>

Describes the self-service permissions for a directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#selfservice_permissions WorkspacesDirectory#selfservice_permissions}

---

##### `StreamingProperties`<sup>Optional</sup> <a name="StreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.streamingProperties"></a>

```go
StreamingProperties WorkspacesDirectoryStreamingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties">WorkspacesDirectoryStreamingProperties</a>

Describes the streaming properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_properties WorkspacesDirectory#streaming_properties}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The identifiers of the subnets for your virtual private cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Indicates whether your WorkSpace directory is dedicated or shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenancy WorkspacesDirectory#tenancy}

---

##### `UserIdentityType`<sup>Optional</sup> <a name="UserIdentityType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.userIdentityType"></a>

```go
UserIdentityType *string
```

- *Type:* *string

The type of identity management the user is using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}

---

##### `WorkspaceAccessProperties`<sup>Optional</sup> <a name="WorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```go
WorkspaceAccessProperties WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

The device types and operating systems that can be used to access a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `WorkspaceCreationProperties`<sup>Optional</sup> <a name="WorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```go
WorkspaceCreationProperties WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

The default values that are used to create WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

##### `WorkspaceDirectoryDescription`<sup>Optional</sup> <a name="WorkspaceDirectoryDescription" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryDescription"></a>

```go
WorkspaceDirectoryDescription *string
```

- *Type:* *string

Description of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}

---

##### `WorkspaceDirectoryName`<sup>Optional</sup> <a name="WorkspaceDirectoryName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceDirectoryName"></a>

```go
WorkspaceDirectoryName *string
```

- *Type:* *string

The name of the directory to register.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}

---

##### `WorkspaceType`<sup>Optional</sup> <a name="WorkspaceType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceType"></a>

```go
WorkspaceType *string
```

- *Type:* *string

Indicates whether the directory's WorkSpace type is personal or pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}

---

### WorkspacesDirectoryIdcConfig <a name="WorkspacesDirectoryIdcConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryIdcConfig {

}
```


### WorkspacesDirectoryMicrosoftEntraConfig <a name="WorkspacesDirectoryMicrosoftEntraConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryMicrosoftEntraConfig {
	ApplicationConfigSecretArn: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn">ApplicationConfigSecretArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the application config. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The identifier of the tenant. |

---

##### `ApplicationConfigSecretArn`<sup>Optional</sup> <a name="ApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.applicationConfigSecretArn"></a>

```go
ApplicationConfigSecretArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the application config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#application_config_secret_arn WorkspacesDirectory#application_config_secret_arn}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The identifier of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#tenant_id WorkspacesDirectory#tenant_id}

---

### WorkspacesDirectorySamlProperties <a name="WorkspacesDirectorySamlProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectorySamlProperties {
	RelayStateParameterName: *string,
	Status: *string,
	UserAccessUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName">RelayStateParameterName</a></code> | <code>*string</code> | The relay state parameter name supported by the SAML 2.0 identity provider (IdP). |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status">Status</a></code> | <code>*string</code> | Indicates the status of SAML 2.0 authentication. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl">UserAccessUrl</a></code> | <code>*string</code> | The SAML 2.0 identity provider (IdP) user access URL. |

---

##### `RelayStateParameterName`<sup>Optional</sup> <a name="RelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.relayStateParameterName"></a>

```go
RelayStateParameterName *string
```

- *Type:* *string

The relay state parameter name supported by the SAML 2.0 identity provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.status"></a>

```go
Status *string
```

- *Type:* *string

Indicates the status of SAML 2.0 authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

##### `UserAccessUrl`<sup>Optional</sup> <a name="UserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlProperties.property.userAccessUrl"></a>

```go
UserAccessUrl *string
```

- *Type:* *string

The SAML 2.0 identity provider (IdP) user access URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}

---

### WorkspacesDirectorySelfservicePermissions <a name="WorkspacesDirectorySelfservicePermissions" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectorySelfservicePermissions {
	ChangeComputeType: *string,
	IncreaseVolumeSize: *string,
	RebuildWorkspace: *string,
	RestartWorkspace: *string,
	SwitchRunningMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType">ChangeComputeType</a></code> | <code>*string</code> | Specifies whether users can change the compute type (bundle) for their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>*string</code> | Specifies whether users can increase the volume size of the drives on their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>*string</code> | Specifies whether users can rebuild the operating system of a WorkSpace to its original state. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace">RestartWorkspace</a></code> | <code>*string</code> | Specifies whether users can restart their WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode">SwitchRunningMode</a></code> | <code>*string</code> | Specifies whether users can switch the running mode of their WorkSpace. |

---

##### `ChangeComputeType`<sup>Optional</sup> <a name="ChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.changeComputeType"></a>

```go
ChangeComputeType *string
```

- *Type:* *string

Specifies whether users can change the compute type (bundle) for their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}

---

##### `IncreaseVolumeSize`<sup>Optional</sup> <a name="IncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.increaseVolumeSize"></a>

```go
IncreaseVolumeSize *string
```

- *Type:* *string

Specifies whether users can increase the volume size of the drives on their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}

---

##### `RebuildWorkspace`<sup>Optional</sup> <a name="RebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.rebuildWorkspace"></a>

```go
RebuildWorkspace *string
```

- *Type:* *string

Specifies whether users can rebuild the operating system of a WorkSpace to its original state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}

---

##### `RestartWorkspace`<sup>Optional</sup> <a name="RestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.restartWorkspace"></a>

```go
RestartWorkspace *string
```

- *Type:* *string

Specifies whether users can restart their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}

---

##### `SwitchRunningMode`<sup>Optional</sup> <a name="SwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissions.property.switchRunningMode"></a>

```go
SwitchRunningMode *string
```

- *Type:* *string

Specifies whether users can switch the running mode of their WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}

---

### WorkspacesDirectoryStreamingProperties <a name="WorkspacesDirectoryStreamingProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryStreamingProperties {
	GlobalAccelerator: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator,
	StorageConnectors: interface{},
	StreamingExperiencePreferredProtocol: *string,
	UserSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator">GlobalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a></code> | Describes the Global Accelerator for directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors">StorageConnectors</a></code> | <code>interface{}</code> | Indicates the storage connector used. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol">StreamingExperiencePreferredProtocol</a></code> | <code>*string</code> | Indicates the type of preferred protocol for the streaming experience. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings">UserSettings</a></code> | <code>interface{}</code> | Indicates the permission settings associated with the user. |

---

##### `GlobalAccelerator`<sup>Optional</sup> <a name="GlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.globalAccelerator"></a>

```go
GlobalAccelerator WorkspacesDirectoryStreamingPropertiesGlobalAccelerator
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

Describes the Global Accelerator for directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#global_accelerator WorkspacesDirectory#global_accelerator}

---

##### `StorageConnectors`<sup>Optional</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.storageConnectors"></a>

```go
StorageConnectors interface{}
```

- *Type:* interface{}

Indicates the storage connector used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#storage_connectors WorkspacesDirectory#storage_connectors}

---

##### `StreamingExperiencePreferredProtocol`<sup>Optional</sup> <a name="StreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.streamingExperiencePreferredProtocol"></a>

```go
StreamingExperiencePreferredProtocol *string
```

- *Type:* *string

Indicates the type of preferred protocol for the streaming experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#streaming_experience_preferred_protocol WorkspacesDirectory#streaming_experience_preferred_protocol}

---

##### `UserSettings`<sup>Optional</sup> <a name="UserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingProperties.property.userSettings"></a>

```go
UserSettings interface{}
```

- *Type:* interface{}

Indicates the permission settings associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_settings WorkspacesDirectory#user_settings}

---

### WorkspacesDirectoryStreamingPropertiesGlobalAccelerator <a name="WorkspacesDirectoryStreamingPropertiesGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator {
	Mode: *string,
	PreferredProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode">Mode</a></code> | <code>*string</code> | Indicates if Global Accelerator for directory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol">PreferredProtocol</a></code> | <code>*string</code> | Indicates the preferred protocol for Global Accelerator. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Indicates if Global Accelerator for directory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#mode WorkspacesDirectory#mode}

---

##### `PreferredProtocol`<sup>Optional</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator.property.preferredProtocol"></a>

```go
PreferredProtocol *string
```

- *Type:* *string

Indicates the preferred protocol for Global Accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#preferred_protocol WorkspacesDirectory#preferred_protocol}

---

### WorkspacesDirectoryStreamingPropertiesStorageConnectors <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors {
	ConnectorType: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType">ConnectorType</a></code> | <code>*string</code> | The type of connector used to save user files. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status">Status</a></code> | <code>*string</code> | Indicates if the storage connector is enabled or disabled. |

---

##### `ConnectorType`<sup>Optional</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.connectorType"></a>

```go
ConnectorType *string
```

- *Type:* *string

The type of connector used to save user files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#connector_type WorkspacesDirectory#connector_type}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectors.property.status"></a>

```go
Status *string
```

- *Type:* *string

Indicates if the storage connector is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}

---

### WorkspacesDirectoryStreamingPropertiesUserSettings <a name="WorkspacesDirectoryStreamingPropertiesUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryStreamingPropertiesUserSettings {
	Action: *string,
	MaximumLength: *f64,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action">Action</a></code> | <code>*string</code> | Indicates the type of action. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength">MaximumLength</a></code> | <code>*f64</code> | Indicates the maximum character length for the specified user setting. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission">Permission</a></code> | <code>*string</code> | Indicates if the setting is enabled or disabled. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.action"></a>

```go
Action *string
```

- *Type:* *string

Indicates the type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#action WorkspacesDirectory#action}

---

##### `MaximumLength`<sup>Optional</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.maximumLength"></a>

```go
MaximumLength *f64
```

- *Type:* *f64

Indicates the maximum character length for the specified user setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#maximum_length WorkspacesDirectory#maximum_length}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettings.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Indicates if the setting is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#permission WorkspacesDirectory#permission}

---

### WorkspacesDirectoryTags <a name="WorkspacesDirectoryTags" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#key WorkspacesDirectory#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#value WorkspacesDirectory#value}

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryWorkspaceAccessProperties {
	AccessEndpointConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig,
	DeviceTypeAndroid: *string,
	DeviceTypeChromeOs: *string,
	DeviceTypeIos: *string,
	DeviceTypeLinux: *string,
	DeviceTypeOsx: *string,
	DeviceTypeWeb: *string,
	DeviceTypeWindows: *string,
	DeviceTypeWorkSpacesThinClient: *string,
	DeviceTypeZeroClient: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig">AccessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a></code> | Describes the access endpoint configuration for a WorkSpace. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>*string</code> | Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs">DeviceTypeChromeOs</a></code> | <code>*string</code> | Indicates whether users can use Chromebooks to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>*string</code> | Indicates whether users can use iOS devices to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>*string</code> | Indicates whether users can use Linux clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>*string</code> | Indicates whether users can use macOS clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>*string</code> | Indicates whether users can access their WorkSpaces through a web browser. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>*string</code> | Indicates whether users can use Windows clients to access their WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient">DeviceTypeWorkSpacesThinClient</a></code> | <code>*string</code> | Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient">DeviceTypeZeroClient</a></code> | <code>*string</code> | Indicates whether users can use zero client devices to access their WorkSpaces. |

---

##### `AccessEndpointConfig`<sup>Optional</sup> <a name="AccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.accessEndpointConfig"></a>

```go
AccessEndpointConfig WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

Describes the access endpoint configuration for a WorkSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_config WorkspacesDirectory#access_endpoint_config}

---

##### `DeviceTypeAndroid`<sup>Optional</sup> <a name="DeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```go
DeviceTypeAndroid *string
```

- *Type:* *string

Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}

---

##### `DeviceTypeChromeOs`<sup>Optional</sup> <a name="DeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeOs"></a>

```go
DeviceTypeChromeOs *string
```

- *Type:* *string

Indicates whether users can use Chromebooks to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_chrome_os WorkspacesDirectory#device_type_chrome_os}

---

##### `DeviceTypeIos`<sup>Optional</sup> <a name="DeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```go
DeviceTypeIos *string
```

- *Type:* *string

Indicates whether users can use iOS devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}

---

##### `DeviceTypeLinux`<sup>Optional</sup> <a name="DeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```go
DeviceTypeLinux *string
```

- *Type:* *string

Indicates whether users can use Linux clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}

---

##### `DeviceTypeOsx`<sup>Optional</sup> <a name="DeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```go
DeviceTypeOsx *string
```

- *Type:* *string

Indicates whether users can use macOS clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}

---

##### `DeviceTypeWeb`<sup>Optional</sup> <a name="DeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```go
DeviceTypeWeb *string
```

- *Type:* *string

Indicates whether users can access their WorkSpaces through a web browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}

---

##### `DeviceTypeWindows`<sup>Optional</sup> <a name="DeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```go
DeviceTypeWindows *string
```

- *Type:* *string

Indicates whether users can use Windows clients to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}

---

##### `DeviceTypeWorkSpacesThinClient`<sup>Optional</sup> <a name="DeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWorkSpacesThinClient"></a>

```go
DeviceTypeWorkSpacesThinClient *string
```

- *Type:* *string

Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_work_spaces_thin_client WorkspacesDirectory#device_type_work_spaces_thin_client}

---

##### `DeviceTypeZeroClient`<sup>Optional</sup> <a name="DeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroClient"></a>

```go
DeviceTypeZeroClient *string
```

- *Type:* *string

Indicates whether users can use zero client devices to access their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#device_type_zero_client WorkspacesDirectory#device_type_zero_client}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig {
	AccessEndpoints: interface{},
	InternetFallbackProtocols: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints">AccessEndpoints</a></code> | <code>interface{}</code> | Indicates a list of access endpoints associated with this directory. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols">InternetFallbackProtocols</a></code> | <code>*[]*string</code> | Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available. |

---

##### `AccessEndpoints`<sup>Optional</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.accessEndpoints"></a>

```go
AccessEndpoints interface{}
```

- *Type:* interface{}

Indicates a list of access endpoints associated with this directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoints WorkspacesDirectory#access_endpoints}

---

##### `InternetFallbackProtocols`<sup>Optional</sup> <a name="InternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig.property.internetFallbackProtocols"></a>

```go
InternetFallbackProtocols *[]*string
```

- *Type:* *[]*string

Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#internet_fallback_protocols WorkspacesDirectory#internet_fallback_protocols}

---

### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints {
	AccessEndpointType: *string,
	VpcEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType">AccessEndpointType</a></code> | <code>*string</code> | Indicates the type of access endpoint. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Indicates the VPC endpoint to use for access. |

---

##### `AccessEndpointType`<sup>Optional</sup> <a name="AccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.accessEndpointType"></a>

```go
AccessEndpointType *string
```

- *Type:* *string

Indicates the type of access endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#access_endpoint_type WorkspacesDirectory#access_endpoint_type}

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpoints.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Indicates the VPC endpoint to use for access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#vpc_endpoint_id WorkspacesDirectory#vpc_endpoint_id}

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

&workspacesdirectory.WorkspacesDirectoryWorkspaceCreationProperties {
	CustomSecurityGroupId: *string,
	DefaultOu: *string,
	EnableInternetAccess: interface{},
	EnableMaintenanceMode: interface{},
	InstanceIamRoleArn: *string,
	UserEnabledAsLocalAdministrator: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>*string</code> | The identifier of the default security group to apply to WorkSpaces when they are created. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">DefaultOu</a></code> | <code>*string</code> | The organizational unit (OU) in the directory for the WorkSpace machine accounts. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>interface{}</code> | Specifies whether maintenance mode is enabled for WorkSpaces. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn">InstanceIamRoleArn</a></code> | <code>*string</code> | Indicates the IAM role ARN of the instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>interface{}</code> | Specifies whether WorkSpace users are local administrators on their WorkSpaces. |

---

##### `CustomSecurityGroupId`<sup>Optional</sup> <a name="CustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```go
CustomSecurityGroupId *string
```

- *Type:* *string

The identifier of the default security group to apply to WorkSpaces when they are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}

---

##### `DefaultOu`<sup>Optional</sup> <a name="DefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```go
DefaultOu *string
```

- *Type:* *string

The organizational unit (OU) in the directory for the WorkSpace machine accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```go
EnableInternetAccess interface{}
```

- *Type:* interface{}

Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}

---

##### `EnableMaintenanceMode`<sup>Optional</sup> <a name="EnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```go
EnableMaintenanceMode interface{}
```

- *Type:* interface{}

Specifies whether maintenance mode is enabled for WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}

---

##### `InstanceIamRoleArn`<sup>Optional</sup> <a name="InstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.instanceIamRoleArn"></a>

```go
InstanceIamRoleArn *string
```

- *Type:* *string

Indicates the IAM role ARN of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#instance_iam_role_arn WorkspacesDirectory#instance_iam_role_arn}

---

##### `UserEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```go
UserEnabledAsLocalAdministrator interface{}
```

- *Type:* interface{}

Specifies whether WorkSpace users are local administrators on their WorkSpaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectoryActiveDirectoryConfigOutputReference <a name="WorkspacesDirectoryActiveDirectoryConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryActiveDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryActiveDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn">ResetServiceAccountSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetServiceAccountSecretArn` <a name="ResetServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.resetServiceAccountSecretArn"></a>

```go
func ResetServiceAccountSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput">ServiceAccountSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn">ServiceAccountSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `ServiceAccountSecretArnInput`<sup>Optional</sup> <a name="ServiceAccountSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArnInput"></a>

```go
func ServiceAccountSecretArnInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `ServiceAccountSecretArn`<sup>Required</sup> <a name="ServiceAccountSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.serviceAccountSecretArn"></a>

```go
func ServiceAccountSecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryActiveDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference <a name="WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">ResetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityArn` <a name="ResetCertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```go
func ResetCertificateAuthorityArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```go
func CertificateAuthorityArnInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryIdcConfigOutputReference <a name="WorkspacesDirectoryIdcConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryIdcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryIdcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspacesDirectoryIdcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryIdcConfig">WorkspacesDirectoryIdcConfig</a>

---


### WorkspacesDirectoryMicrosoftEntraConfigOutputReference <a name="WorkspacesDirectoryMicrosoftEntraConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryMicrosoftEntraConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryMicrosoftEntraConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn">ResetApplicationConfigSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationConfigSecretArn` <a name="ResetApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetApplicationConfigSecretArn"></a>

```go
func ResetApplicationConfigSecretArn()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput">ApplicationConfigSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn">ApplicationConfigSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationConfigSecretArnInput`<sup>Optional</sup> <a name="ApplicationConfigSecretArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArnInput"></a>

```go
func ApplicationConfigSecretArnInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ApplicationConfigSecretArn`<sup>Required</sup> <a name="ApplicationConfigSecretArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.applicationConfigSecretArn"></a>

```go
func ApplicationConfigSecretArn() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryMicrosoftEntraConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectorySamlPropertiesOutputReference <a name="WorkspacesDirectorySamlPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectorySamlPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectorySamlPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName">ResetRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl">ResetUserAccessUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelayStateParameterName` <a name="ResetRelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetRelayStateParameterName"></a>

```go
func ResetRelayStateParameterName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUserAccessUrl` <a name="ResetUserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.resetUserAccessUrl"></a>

```go
func ResetUserAccessUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput">RelayStateParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput">UserAccessUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName">RelayStateParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl">UserAccessUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelayStateParameterNameInput`<sup>Optional</sup> <a name="RelayStateParameterNameInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterNameInput"></a>

```go
func RelayStateParameterNameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UserAccessUrlInput`<sup>Optional</sup> <a name="UserAccessUrlInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrlInput"></a>

```go
func UserAccessUrlInput() *string
```

- *Type:* *string

---

##### `RelayStateParameterName`<sup>Required</sup> <a name="RelayStateParameterName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.relayStateParameterName"></a>

```go
func RelayStateParameterName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserAccessUrl`<sup>Required</sup> <a name="UserAccessUrl" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.userAccessUrl"></a>

```go
func UserAccessUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySamlPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectorySelfservicePermissionsOutputReference <a name="WorkspacesDirectorySelfservicePermissionsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectorySelfservicePermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectorySelfservicePermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType">ResetChangeComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize">ResetIncreaseVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace">ResetRebuildWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace">ResetRestartWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode">ResetSwitchRunningMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangeComputeType` <a name="ResetChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetChangeComputeType"></a>

```go
func ResetChangeComputeType()
```

##### `ResetIncreaseVolumeSize` <a name="ResetIncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```go
func ResetIncreaseVolumeSize()
```

##### `ResetRebuildWorkspace` <a name="ResetRebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRebuildWorkspace"></a>

```go
func ResetRebuildWorkspace()
```

##### `ResetRestartWorkspace` <a name="ResetRestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetRestartWorkspace"></a>

```go
func ResetRestartWorkspace()
```

##### `ResetSwitchRunningMode` <a name="ResetSwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.resetSwitchRunningMode"></a>

```go
func ResetSwitchRunningMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput">ChangeComputeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput">IncreaseVolumeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput">RebuildWorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput">RestartWorkspaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput">SwitchRunningModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType">ChangeComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize">IncreaseVolumeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace">RebuildWorkspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace">RestartWorkspace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode">SwitchRunningMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeComputeTypeInput`<sup>Optional</sup> <a name="ChangeComputeTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```go
func ChangeComputeTypeInput() *string
```

- *Type:* *string

---

##### `IncreaseVolumeSizeInput`<sup>Optional</sup> <a name="IncreaseVolumeSizeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```go
func IncreaseVolumeSizeInput() *string
```

- *Type:* *string

---

##### `RebuildWorkspaceInput`<sup>Optional</sup> <a name="RebuildWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```go
func RebuildWorkspaceInput() *string
```

- *Type:* *string

---

##### `RestartWorkspaceInput`<sup>Optional</sup> <a name="RestartWorkspaceInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```go
func RestartWorkspaceInput() *string
```

- *Type:* *string

---

##### `SwitchRunningModeInput`<sup>Optional</sup> <a name="SwitchRunningModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningModeInput"></a>

```go
func SwitchRunningModeInput() *string
```

- *Type:* *string

---

##### `ChangeComputeType`<sup>Required</sup> <a name="ChangeComputeType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.changeComputeType"></a>

```go
func ChangeComputeType() *string
```

- *Type:* *string

---

##### `IncreaseVolumeSize`<sup>Required</sup> <a name="IncreaseVolumeSize" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.increaseVolumeSize"></a>

```go
func IncreaseVolumeSize() *string
```

- *Type:* *string

---

##### `RebuildWorkspace`<sup>Required</sup> <a name="RebuildWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.rebuildWorkspace"></a>

```go
func RebuildWorkspace() *string
```

- *Type:* *string

---

##### `RestartWorkspace`<sup>Required</sup> <a name="RestartWorkspace" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.restartWorkspace"></a>

```go
func RestartWorkspace() *string
```

- *Type:* *string

---

##### `SwitchRunningMode`<sup>Required</sup> <a name="SwitchRunningMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.switchRunningMode"></a>

```go
func SwitchRunningMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectorySelfservicePermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference <a name="WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol">ResetPreferredProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetPreferredProtocol` <a name="ResetPreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.resetPreferredProtocol"></a>

```go
func ResetPreferredProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput">PreferredProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol">PreferredProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `PreferredProtocolInput`<sup>Optional</sup> <a name="PreferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocolInput"></a>

```go
func PreferredProtocolInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `PreferredProtocol`<sup>Required</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.preferredProtocol"></a>

```go
func PreferredProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryStreamingPropertiesOutputReference <a name="WorkspacesDirectoryStreamingPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryStreamingPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryStreamingPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator">PutGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors">PutStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings">PutUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator">ResetGlobalAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors">ResetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol">ResetStreamingExperiencePreferredProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings">ResetUserSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlobalAccelerator` <a name="PutGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator"></a>

```go
func PutGlobalAccelerator(value WorkspacesDirectoryStreamingPropertiesGlobalAccelerator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putGlobalAccelerator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAccelerator">WorkspacesDirectoryStreamingPropertiesGlobalAccelerator</a>

---

##### `PutStorageConnectors` <a name="PutStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors"></a>

```go
func PutStorageConnectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putStorageConnectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUserSettings` <a name="PutUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings"></a>

```go
func PutUserSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.putUserSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGlobalAccelerator` <a name="ResetGlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetGlobalAccelerator"></a>

```go
func ResetGlobalAccelerator()
```

##### `ResetStorageConnectors` <a name="ResetStorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStorageConnectors"></a>

```go
func ResetStorageConnectors()
```

##### `ResetStreamingExperiencePreferredProtocol` <a name="ResetStreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetStreamingExperiencePreferredProtocol"></a>

```go
func ResetStreamingExperiencePreferredProtocol()
```

##### `ResetUserSettings` <a name="ResetUserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.resetUserSettings"></a>

```go
func ResetUserSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator">GlobalAccelerator</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors">StorageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput">GlobalAcceleratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput">StorageConnectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput">StreamingExperiencePreferredProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput">UserSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol">StreamingExperiencePreferredProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlobalAccelerator`<sup>Required</sup> <a name="GlobalAccelerator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAccelerator"></a>

```go
func GlobalAccelerator() WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference">WorkspacesDirectoryStreamingPropertiesGlobalAcceleratorOutputReference</a>

---

##### `StorageConnectors`<sup>Required</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectors"></a>

```go
func StorageConnectors() WorkspacesDirectoryStreamingPropertiesStorageConnectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList">WorkspacesDirectoryStreamingPropertiesStorageConnectorsList</a>

---

##### `UserSettings`<sup>Required</sup> <a name="UserSettings" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettings"></a>

```go
func UserSettings() WorkspacesDirectoryStreamingPropertiesUserSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList">WorkspacesDirectoryStreamingPropertiesUserSettingsList</a>

---

##### `GlobalAcceleratorInput`<sup>Optional</sup> <a name="GlobalAcceleratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.globalAcceleratorInput"></a>

```go
func GlobalAcceleratorInput() interface{}
```

- *Type:* interface{}

---

##### `StorageConnectorsInput`<sup>Optional</sup> <a name="StorageConnectorsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.storageConnectorsInput"></a>

```go
func StorageConnectorsInput() interface{}
```

- *Type:* interface{}

---

##### `StreamingExperiencePreferredProtocolInput`<sup>Optional</sup> <a name="StreamingExperiencePreferredProtocolInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocolInput"></a>

```go
func StreamingExperiencePreferredProtocolInput() *string
```

- *Type:* *string

---

##### `UserSettingsInput`<sup>Optional</sup> <a name="UserSettingsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.userSettingsInput"></a>

```go
func UserSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `StreamingExperiencePreferredProtocol`<sup>Required</sup> <a name="StreamingExperiencePreferredProtocol" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.streamingExperiencePreferredProtocol"></a>

```go
func StreamingExperiencePreferredProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsList <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryStreamingPropertiesStorageConnectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesDirectoryStreamingPropertiesStorageConnectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get"></a>

```go
func Get(index *f64) WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType">ResetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectorType` <a name="ResetConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetConnectorType"></a>

```go
func ResetConnectorType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```go
func ConnectorTypeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesStorageConnectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsList <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryStreamingPropertiesUserSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesDirectoryStreamingPropertiesUserSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get"></a>

```go
func Get(index *f64) WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference <a name="WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength">ResetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetMaximumLength` <a name="ResetMaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetMaximumLength"></a>

```go
func ResetMaximumLength()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput">MaximumLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength">MaximumLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `MaximumLengthInput`<sup>Optional</sup> <a name="MaximumLengthInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLengthInput"></a>

```go
func MaximumLengthInput() *f64
```

- *Type:* *f64

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `MaximumLength`<sup>Required</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.maximumLength"></a>

```go
func MaximumLength() *f64
```

- *Type:* *f64

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryStreamingPropertiesUserSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryTagsList <a name="WorkspacesDirectoryTagsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesDirectoryTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get"></a>

```go
func Get(index *f64) WorkspacesDirectoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryTagsOutputReference <a name="WorkspacesDirectoryTagsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesDirectoryTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get"></a>

```go
func Get(index *f64) WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType">ResetAccessEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessEndpointType` <a name="ResetAccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetAccessEndpointType"></a>

```go
func ResetAccessEndpointType()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput">AccessEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType">AccessEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessEndpointTypeInput`<sup>Optional</sup> <a name="AccessEndpointTypeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointTypeInput"></a>

```go
func AccessEndpointTypeInput() *string
```

- *Type:* *string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `AccessEndpointType`<sup>Required</sup> <a name="AccessEndpointType" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.accessEndpointType"></a>

```go
func AccessEndpointType() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints">PutAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints">ResetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols">ResetInternetFallbackProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessEndpoints` <a name="PutAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints"></a>

```go
func PutAccessEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.putAccessEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessEndpoints` <a name="ResetAccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetAccessEndpoints"></a>

```go
func ResetAccessEndpoints()
```

##### `ResetInternetFallbackProtocols` <a name="ResetInternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.resetInternetFallbackProtocols"></a>

```go
func ResetInternetFallbackProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput">AccessEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput">InternetFallbackProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols">InternetFallbackProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpoints"></a>

```go
func AccessEndpoints() WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigAccessEndpointsList</a>

---

##### `AccessEndpointsInput`<sup>Optional</sup> <a name="AccessEndpointsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.accessEndpointsInput"></a>

```go
func AccessEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `InternetFallbackProtocolsInput`<sup>Optional</sup> <a name="InternetFallbackProtocolsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocolsInput"></a>

```go
func InternetFallbackProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InternetFallbackProtocols`<sup>Required</sup> <a name="InternetFallbackProtocols" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internetFallbackProtocols"></a>

```go
func InternetFallbackProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig">PutAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig">ResetAccessEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">ResetDeviceTypeAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs">ResetDeviceTypeChromeOs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">ResetDeviceTypeIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">ResetDeviceTypeLinux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">ResetDeviceTypeOsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">ResetDeviceTypeWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">ResetDeviceTypeWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient">ResetDeviceTypeWorkSpacesThinClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient">ResetDeviceTypeZeroClient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessEndpointConfig` <a name="PutAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig"></a>

```go
func PutAccessEndpointConfig(value WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.putAccessEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfig</a>

---

##### `ResetAccessEndpointConfig` <a name="ResetAccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetAccessEndpointConfig"></a>

```go
func ResetAccessEndpointConfig()
```

##### `ResetDeviceTypeAndroid` <a name="ResetDeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```go
func ResetDeviceTypeAndroid()
```

##### `ResetDeviceTypeChromeOs` <a name="ResetDeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeOs"></a>

```go
func ResetDeviceTypeChromeOs()
```

##### `ResetDeviceTypeIos` <a name="ResetDeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```go
func ResetDeviceTypeIos()
```

##### `ResetDeviceTypeLinux` <a name="ResetDeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```go
func ResetDeviceTypeLinux()
```

##### `ResetDeviceTypeOsx` <a name="ResetDeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```go
func ResetDeviceTypeOsx()
```

##### `ResetDeviceTypeWeb` <a name="ResetDeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```go
func ResetDeviceTypeWeb()
```

##### `ResetDeviceTypeWindows` <a name="ResetDeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```go
func ResetDeviceTypeWindows()
```

##### `ResetDeviceTypeWorkSpacesThinClient` <a name="ResetDeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWorkSpacesThinClient"></a>

```go
func ResetDeviceTypeWorkSpacesThinClient()
```

##### `ResetDeviceTypeZeroClient` <a name="ResetDeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroClient"></a>

```go
func ResetDeviceTypeZeroClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig">AccessEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput">AccessEndpointConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">DeviceTypeAndroidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput">DeviceTypeChromeOsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">DeviceTypeIosInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">DeviceTypeLinuxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">DeviceTypeOsxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">DeviceTypeWebInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">DeviceTypeWindowsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput">DeviceTypeWorkSpacesThinClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput">DeviceTypeZeroClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">DeviceTypeAndroid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs">DeviceTypeChromeOs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">DeviceTypeIos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">DeviceTypeLinux</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">DeviceTypeOsx</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">DeviceTypeWeb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">DeviceTypeWindows</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient">DeviceTypeWorkSpacesThinClient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient">DeviceTypeZeroClient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessEndpointConfig`<sup>Required</sup> <a name="AccessEndpointConfig" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfig"></a>

```go
func AccessEndpointConfig() WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesAccessEndpointConfigOutputReference</a>

---

##### `AccessEndpointConfigInput`<sup>Optional</sup> <a name="AccessEndpointConfigInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.accessEndpointConfigInput"></a>

```go
func AccessEndpointConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceTypeAndroidInput`<sup>Optional</sup> <a name="DeviceTypeAndroidInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```go
func DeviceTypeAndroidInput() *string
```

- *Type:* *string

---

##### `DeviceTypeChromeOsInput`<sup>Optional</sup> <a name="DeviceTypeChromeOsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOsInput"></a>

```go
func DeviceTypeChromeOsInput() *string
```

- *Type:* *string

---

##### `DeviceTypeIosInput`<sup>Optional</sup> <a name="DeviceTypeIosInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```go
func DeviceTypeIosInput() *string
```

- *Type:* *string

---

##### `DeviceTypeLinuxInput`<sup>Optional</sup> <a name="DeviceTypeLinuxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```go
func DeviceTypeLinuxInput() *string
```

- *Type:* *string

---

##### `DeviceTypeOsxInput`<sup>Optional</sup> <a name="DeviceTypeOsxInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```go
func DeviceTypeOsxInput() *string
```

- *Type:* *string

---

##### `DeviceTypeWebInput`<sup>Optional</sup> <a name="DeviceTypeWebInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```go
func DeviceTypeWebInput() *string
```

- *Type:* *string

---

##### `DeviceTypeWindowsInput`<sup>Optional</sup> <a name="DeviceTypeWindowsInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```go
func DeviceTypeWindowsInput() *string
```

- *Type:* *string

---

##### `DeviceTypeWorkSpacesThinClientInput`<sup>Optional</sup> <a name="DeviceTypeWorkSpacesThinClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClientInput"></a>

```go
func DeviceTypeWorkSpacesThinClientInput() *string
```

- *Type:* *string

---

##### `DeviceTypeZeroClientInput`<sup>Optional</sup> <a name="DeviceTypeZeroClientInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClientInput"></a>

```go
func DeviceTypeZeroClientInput() *string
```

- *Type:* *string

---

##### `DeviceTypeAndroid`<sup>Required</sup> <a name="DeviceTypeAndroid" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```go
func DeviceTypeAndroid() *string
```

- *Type:* *string

---

##### `DeviceTypeChromeOs`<sup>Required</sup> <a name="DeviceTypeChromeOs" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeOs"></a>

```go
func DeviceTypeChromeOs() *string
```

- *Type:* *string

---

##### `DeviceTypeIos`<sup>Required</sup> <a name="DeviceTypeIos" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```go
func DeviceTypeIos() *string
```

- *Type:* *string

---

##### `DeviceTypeLinux`<sup>Required</sup> <a name="DeviceTypeLinux" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```go
func DeviceTypeLinux() *string
```

- *Type:* *string

---

##### `DeviceTypeOsx`<sup>Required</sup> <a name="DeviceTypeOsx" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```go
func DeviceTypeOsx() *string
```

- *Type:* *string

---

##### `DeviceTypeWeb`<sup>Required</sup> <a name="DeviceTypeWeb" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```go
func DeviceTypeWeb() *string
```

- *Type:* *string

---

##### `DeviceTypeWindows`<sup>Required</sup> <a name="DeviceTypeWindows" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```go
func DeviceTypeWindows() *string
```

- *Type:* *string

---

##### `DeviceTypeWorkSpacesThinClient`<sup>Required</sup> <a name="DeviceTypeWorkSpacesThinClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWorkSpacesThinClient"></a>

```go
func DeviceTypeWorkSpacesThinClient() *string
```

- *Type:* *string

---

##### `DeviceTypeZeroClient`<sup>Required</sup> <a name="DeviceTypeZeroClient" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroClient"></a>

```go
func DeviceTypeZeroClient() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesdirectory"

workspacesdirectory.NewWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">ResetCustomSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">ResetDefaultOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">ResetEnableMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn">ResetInstanceIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">ResetUserEnabledAsLocalAdministrator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSecurityGroupId` <a name="ResetCustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```go
func ResetCustomSecurityGroupId()
```

##### `ResetDefaultOu` <a name="ResetDefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```go
func ResetDefaultOu()
```

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```go
func ResetEnableInternetAccess()
```

##### `ResetEnableMaintenanceMode` <a name="ResetEnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```go
func ResetEnableMaintenanceMode()
```

##### `ResetInstanceIamRoleArn` <a name="ResetInstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetInstanceIamRoleArn"></a>

```go
func ResetInstanceIamRoleArn()
```

##### `ResetUserEnabledAsLocalAdministrator` <a name="ResetUserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```go
func ResetUserEnabledAsLocalAdministrator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">CustomSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">DefaultOuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">EnableMaintenanceModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput">InstanceIamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">UserEnabledAsLocalAdministratorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">CustomSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">DefaultOu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">EnableMaintenanceMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn">InstanceIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">UserEnabledAsLocalAdministrator</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSecurityGroupIdInput`<sup>Optional</sup> <a name="CustomSecurityGroupIdInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```go
func CustomSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `DefaultOuInput`<sup>Optional</sup> <a name="DefaultOuInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```go
func DefaultOuInput() *string
```

- *Type:* *string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```go
func EnableInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `EnableMaintenanceModeInput`<sup>Optional</sup> <a name="EnableMaintenanceModeInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```go
func EnableMaintenanceModeInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceIamRoleArnInput`<sup>Optional</sup> <a name="InstanceIamRoleArnInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArnInput"></a>

```go
func InstanceIamRoleArnInput() *string
```

- *Type:* *string

---

##### `UserEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="UserEnabledAsLocalAdministratorInput" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```go
func UserEnabledAsLocalAdministratorInput() interface{}
```

- *Type:* interface{}

---

##### `CustomSecurityGroupId`<sup>Required</sup> <a name="CustomSecurityGroupId" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```go
func CustomSecurityGroupId() *string
```

- *Type:* *string

---

##### `DefaultOu`<sup>Required</sup> <a name="DefaultOu" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```go
func DefaultOu() *string
```

- *Type:* *string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```go
func EnableInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `EnableMaintenanceMode`<sup>Required</sup> <a name="EnableMaintenanceMode" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```go
func EnableMaintenanceMode() interface{}
```

- *Type:* interface{}

---

##### `InstanceIamRoleArn`<sup>Required</sup> <a name="InstanceIamRoleArn" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.instanceIamRoleArn"></a>

```go
func InstanceIamRoleArn() *string
```

- *Type:* *string

---

##### `UserEnabledAsLocalAdministrator`<sup>Required</sup> <a name="UserEnabledAsLocalAdministrator" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```go
func UserEnabledAsLocalAdministrator() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



