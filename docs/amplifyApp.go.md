# `amplifyApp` Submodule <a name="`amplifyApp` Submodule" id="@cdktn/provider-awscc.amplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyApp <a name="AmplifyApp" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app awscc_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyApp(scope Construct, id *string, config AmplifyAppConfig) AmplifyApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig">PutAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig">PutBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig">PutCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules">PutCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables">PutEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig">PutJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig">ResetAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig">ResetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec">ResetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig">ResetCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn">ResetComputeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules">ResetCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion">ResetEnableBranchAutoDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole">ResetIamServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig">ResetJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoBranchCreationConfig` <a name="PutAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig"></a>

```go
func PutAutoBranchCreationConfig(value AmplifyAppAutoBranchCreationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `PutBasicAuthConfig` <a name="PutBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig"></a>

```go
func PutBasicAuthConfig(value AmplifyAppBasicAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---

##### `PutCacheConfig` <a name="PutCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig"></a>

```go
func PutCacheConfig(value AmplifyAppCacheConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---

##### `PutCustomRules` <a name="PutCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules"></a>

```go
func PutCustomRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvironmentVariables` <a name="PutEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables"></a>

```go
func PutEnvironmentVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutJobConfig` <a name="PutJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig"></a>

```go
func PutJobConfig(value AmplifyAppJobConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetAutoBranchCreationConfig` <a name="ResetAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig"></a>

```go
func ResetAutoBranchCreationConfig()
```

##### `ResetBasicAuthConfig` <a name="ResetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig"></a>

```go
func ResetBasicAuthConfig()
```

##### `ResetBuildSpec` <a name="ResetBuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec"></a>

```go
func ResetBuildSpec()
```

##### `ResetCacheConfig` <a name="ResetCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig"></a>

```go
func ResetCacheConfig()
```

##### `ResetComputeRoleArn` <a name="ResetComputeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn"></a>

```go
func ResetComputeRoleArn()
```

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders"></a>

```go
func ResetCustomHeaders()
```

##### `ResetCustomRules` <a name="ResetCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules"></a>

```go
func ResetCustomRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableBranchAutoDeletion` <a name="ResetEnableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion"></a>

```go
func ResetEnableBranchAutoDeletion()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetIamServiceRole` <a name="ResetIamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole"></a>

```go
func ResetIamServiceRole()
```

##### `ResetJobConfig` <a name="ResetJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig"></a>

```go
func ResetJobConfig()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken"></a>

```go
func ResetOauthToken()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository"></a>

```go
func ResetRepository()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.AmplifyApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.AmplifyApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.AmplifyApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.AmplifyApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AmplifyApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AmplifyApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig">AutoBranchCreationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig">CacheConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules">CustomRules</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain">DefaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig">JobConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput">AutoBranchCreationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput">BasicAuthConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput">BuildSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput">CacheConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput">ComputeRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput">CustomHeadersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput">CustomRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput">EnableBranchAutoDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput">IamServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput">JobConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput">OauthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec">BuildSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn">ComputeRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders">CustomHeaders</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion">EnableBranchAutoDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole">IamServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken">OauthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoBranchCreationConfig`<sup>Required</sup> <a name="AutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig"></a>

```go
func AutoBranchCreationConfig() AmplifyAppAutoBranchCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `BasicAuthConfig`<sup>Required</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig"></a>

```go
func BasicAuthConfig() AmplifyAppBasicAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a>

---

##### `CacheConfig`<sup>Required</sup> <a name="CacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig"></a>

```go
func CacheConfig() AmplifyAppCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a>

---

##### `CustomRules`<sup>Required</sup> <a name="CustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules"></a>

```go
func CustomRules() AmplifyAppCustomRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a>

---

##### `DefaultDomain`<sup>Required</sup> <a name="DefaultDomain" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain"></a>

```go
func DefaultDomain() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables"></a>

```go
func EnvironmentVariables() AmplifyAppEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobConfig`<sup>Required</sup> <a name="JobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig"></a>

```go
func JobConfig() AmplifyAppJobConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags"></a>

```go
func Tags() AmplifyAppTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `AutoBranchCreationConfigInput`<sup>Optional</sup> <a name="AutoBranchCreationConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput"></a>

```go
func AutoBranchCreationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BasicAuthConfigInput`<sup>Optional</sup> <a name="BasicAuthConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput"></a>

```go
func BasicAuthConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BuildSpecInput`<sup>Optional</sup> <a name="BuildSpecInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput"></a>

```go
func BuildSpecInput() *string
```

- *Type:* *string

---

##### `CacheConfigInput`<sup>Optional</sup> <a name="CacheConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput"></a>

```go
func CacheConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ComputeRoleArnInput`<sup>Optional</sup> <a name="ComputeRoleArnInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput"></a>

```go
func ComputeRoleArnInput() *string
```

- *Type:* *string

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput"></a>

```go
func CustomHeadersInput() *string
```

- *Type:* *string

---

##### `CustomRulesInput`<sup>Optional</sup> <a name="CustomRulesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput"></a>

```go
func CustomRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableBranchAutoDeletionInput`<sup>Optional</sup> <a name="EnableBranchAutoDeletionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput"></a>

```go
func EnableBranchAutoDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `IamServiceRoleInput`<sup>Optional</sup> <a name="IamServiceRoleInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput"></a>

```go
func IamServiceRoleInput() *string
```

- *Type:* *string

---

##### `JobConfigInput`<sup>Optional</sup> <a name="JobConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput"></a>

```go
func JobConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput"></a>

```go
func OauthTokenInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `BuildSpec`<sup>Required</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec"></a>

```go
func BuildSpec() *string
```

- *Type:* *string

---

##### `ComputeRoleArn`<sup>Required</sup> <a name="ComputeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn"></a>

```go
func ComputeRoleArn() *string
```

- *Type:* *string

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders"></a>

```go
func CustomHeaders() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableBranchAutoDeletion`<sup>Required</sup> <a name="EnableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion"></a>

```go
func EnableBranchAutoDeletion() interface{}
```

- *Type:* interface{}

---

##### `IamServiceRole`<sup>Required</sup> <a name="IamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole"></a>

```go
func IamServiceRole() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken"></a>

```go
func OauthToken() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppAutoBranchCreationConfig <a name="AmplifyAppAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppAutoBranchCreationConfig {
	AutoBranchCreationPatterns: *[]*string,
	BasicAuthConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig,
	BuildSpec: *string,
	EnableAutoBranchCreation: interface{},
	EnableAutoBuild: interface{},
	EnablePerformanceMode: interface{},
	EnablePullRequestPreview: interface{},
	EnvironmentVariables: interface{},
	Framework: *string,
	PullRequestEnvironmentName: *string,
	Stage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns">AutoBranchCreationPatterns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec">BuildSpec</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation">EnableAutoBranchCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework">Framework</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#framework AmplifyApp#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage">Stage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#stage AmplifyApp#stage}. |

---

##### `AutoBranchCreationPatterns`<sup>Optional</sup> <a name="AutoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns"></a>

```go
AutoBranchCreationPatterns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `BasicAuthConfig`<sup>Optional</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig"></a>

```go
BasicAuthConfig AmplifyAppAutoBranchCreationConfigBasicAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `BuildSpec`<sup>Optional</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec"></a>

```go
BuildSpec *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `EnableAutoBranchCreation`<sup>Optional</sup> <a name="EnableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation"></a>

```go
EnableAutoBranchCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `EnableAutoBuild`<sup>Optional</sup> <a name="EnableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

```go
EnableAutoBuild interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

##### `EnablePerformanceMode`<sup>Optional</sup> <a name="EnablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

```go
EnablePerformanceMode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

##### `EnablePullRequestPreview`<sup>Optional</sup> <a name="EnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

```go
EnablePullRequestPreview interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables"></a>

```go
EnvironmentVariables interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `Framework`<sup>Optional</sup> <a name="Framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#framework AmplifyApp#framework}.

---

##### `PullRequestEnvironmentName`<sup>Optional</sup> <a name="PullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

```go
PullRequestEnvironmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#stage AmplifyApp#stage}.

---

### AmplifyAppAutoBranchCreationConfigBasicAuthConfig <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig {
	EnableBasicAuth: interface{},
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth"></a>

```go
EnableBasicAuth interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppAutoBranchCreationConfigEnvironmentVariables <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppBasicAuthConfig <a name="AmplifyAppBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppBasicAuthConfig {
	EnableBasicAuth: interface{},
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth"></a>

```go
EnableBasicAuth interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppCacheConfig <a name="AmplifyAppCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppCacheConfig {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#type AmplifyApp#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#type AmplifyApp#type}.

---

### AmplifyAppConfig <a name="AmplifyAppConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessToken: *string,
	AutoBranchCreationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig,
	BasicAuthConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.amplifyApp.AmplifyAppBasicAuthConfig,
	BuildSpec: *string,
	CacheConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.amplifyApp.AmplifyAppCacheConfig,
	ComputeRoleArn: *string,
	CustomHeaders: *string,
	CustomRules: interface{},
	Description: *string,
	EnableBranchAutoDeletion: interface{},
	EnvironmentVariables: interface{},
	IamServiceRole: *string,
	JobConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.amplifyApp.AmplifyAppJobConfig,
	OauthToken: *string,
	Platform: *string,
	Repository: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig">AutoBranchCreationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec">BuildSpec</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig">CacheConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn">ComputeRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders">CustomHeaders</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules">CustomRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion">EnableBranchAutoDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole">IamServiceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig">JobConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken">OauthToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform">Platform</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#tags AmplifyApp#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}.

---

##### `AutoBranchCreationConfig`<sup>Optional</sup> <a name="AutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig"></a>

```go
AutoBranchCreationConfig AmplifyAppAutoBranchCreationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}.

---

##### `BasicAuthConfig`<sup>Optional</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig"></a>

```go
BasicAuthConfig AmplifyAppBasicAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `BuildSpec`<sup>Optional</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec"></a>

```go
BuildSpec *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `CacheConfig`<sup>Optional</sup> <a name="CacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig"></a>

```go
CacheConfig AmplifyAppCacheConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}.

---

##### `ComputeRoleArn`<sup>Optional</sup> <a name="ComputeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn"></a>

```go
ComputeRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}.

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders"></a>

```go
CustomHeaders *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}.

---

##### `CustomRules`<sup>Optional</sup> <a name="CustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules"></a>

```go
CustomRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#description AmplifyApp#description}.

---

##### `EnableBranchAutoDeletion`<sup>Optional</sup> <a name="EnableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion"></a>

```go
EnableBranchAutoDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables"></a>

```go
EnvironmentVariables interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `IamServiceRole`<sup>Optional</sup> <a name="IamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole"></a>

```go
IamServiceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}.

---

##### `JobConfig`<sup>Optional</sup> <a name="JobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig"></a>

```go
JobConfig AmplifyAppJobConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}.

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken"></a>

```go
OauthToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#platform AmplifyApp#platform}.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#repository AmplifyApp#repository}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#tags AmplifyApp#tags}.

---

### AmplifyAppCustomRules <a name="AmplifyAppCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppCustomRules {
	Condition: *string,
	Source: *string,
	Status: *string,
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#condition AmplifyApp#condition}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#source AmplifyApp#source}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#status AmplifyApp#status}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#target AmplifyApp#target}. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#condition AmplifyApp#condition}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#source AmplifyApp#source}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#status AmplifyApp#status}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#target AmplifyApp#target}.

---

### AmplifyAppEnvironmentVariables <a name="AmplifyAppEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppEnvironmentVariables {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppJobConfig <a name="AmplifyAppJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppJobConfig {
	BuildComputeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType">BuildComputeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}. |

---

##### `BuildComputeType`<sup>Optional</sup> <a name="BuildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType"></a>

```go
BuildComputeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}.

---

### AmplifyAppTags <a name="AmplifyAppTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

&amplifyapp.AmplifyAppTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#key AmplifyApp#key}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#key AmplifyApp#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```go
func ResetEnableBasicAuth()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```go
func EnableBasicAuthInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```go
func EnableBasicAuth() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppAutoBranchCreationConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppAutoBranchCreationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AmplifyAppAutoBranchCreationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig">PutBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables">PutEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns">ResetAutoBranchCreationPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig">ResetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec">ResetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation">ResetEnableAutoBranchCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild">ResetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode">ResetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview">ResetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework">ResetFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName">ResetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthConfig` <a name="PutBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig"></a>

```go
func PutBasicAuthConfig(value AmplifyAppAutoBranchCreationConfigBasicAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---

##### `PutEnvironmentVariables` <a name="PutEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables"></a>

```go
func PutEnvironmentVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoBranchCreationPatterns` <a name="ResetAutoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns"></a>

```go
func ResetAutoBranchCreationPatterns()
```

##### `ResetBasicAuthConfig` <a name="ResetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig"></a>

```go
func ResetBasicAuthConfig()
```

##### `ResetBuildSpec` <a name="ResetBuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec"></a>

```go
func ResetBuildSpec()
```

##### `ResetEnableAutoBranchCreation` <a name="ResetEnableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation"></a>

```go
func ResetEnableAutoBranchCreation()
```

##### `ResetEnableAutoBuild` <a name="ResetEnableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild"></a>

```go
func ResetEnableAutoBuild()
```

##### `ResetEnablePerformanceMode` <a name="ResetEnablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode"></a>

```go
func ResetEnablePerformanceMode()
```

##### `ResetEnablePullRequestPreview` <a name="ResetEnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview"></a>

```go
func ResetEnablePullRequestPreview()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetFramework` <a name="ResetFramework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework"></a>

```go
func ResetFramework()
```

##### `ResetPullRequestEnvironmentName` <a name="ResetPullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName"></a>

```go
func ResetPullRequestEnvironmentName()
```

##### `ResetStage` <a name="ResetStage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage"></a>

```go
func ResetStage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig">BasicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput">AutoBranchCreationPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput">BasicAuthConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput">BuildSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput">EnableAutoBranchCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput">EnableAutoBuildInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput">EnablePerformanceModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput">EnablePullRequestPreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput">PullRequestEnvironmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns">AutoBranchCreationPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">BuildSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation">EnableAutoBranchCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuthConfig`<sup>Required</sup> <a name="BasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig"></a>

```go
func BasicAuthConfig() AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a>

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a>

---

##### `AutoBranchCreationPatternsInput`<sup>Optional</sup> <a name="AutoBranchCreationPatternsInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput"></a>

```go
func AutoBranchCreationPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BasicAuthConfigInput`<sup>Optional</sup> <a name="BasicAuthConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput"></a>

```go
func BasicAuthConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BuildSpecInput`<sup>Optional</sup> <a name="BuildSpecInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput"></a>

```go
func BuildSpecInput() *string
```

- *Type:* *string

---

##### `EnableAutoBranchCreationInput`<sup>Optional</sup> <a name="EnableAutoBranchCreationInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput"></a>

```go
func EnableAutoBranchCreationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutoBuildInput`<sup>Optional</sup> <a name="EnableAutoBuildInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput"></a>

```go
func EnableAutoBuildInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePerformanceModeInput`<sup>Optional</sup> <a name="EnablePerformanceModeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput"></a>

```go
func EnablePerformanceModeInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePullRequestPreviewInput`<sup>Optional</sup> <a name="EnablePullRequestPreviewInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput"></a>

```go
func EnablePullRequestPreviewInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `PullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="PullRequestEnvironmentNameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput"></a>

```go
func PullRequestEnvironmentNameInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `AutoBranchCreationPatterns`<sup>Required</sup> <a name="AutoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns"></a>

```go
func AutoBranchCreationPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `BuildSpec`<sup>Required</sup> <a name="BuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```go
func BuildSpec() *string
```

- *Type:* *string

---

##### `EnableAutoBranchCreation`<sup>Required</sup> <a name="EnableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation"></a>

```go
func EnableAutoBranchCreation() interface{}
```

- *Type:* interface{}

---

##### `EnableAutoBuild`<sup>Required</sup> <a name="EnableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```go
func EnableAutoBuild() interface{}
```

- *Type:* interface{}

---

##### `EnablePerformanceMode`<sup>Required</sup> <a name="EnablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```go
func EnablePerformanceMode() interface{}
```

- *Type:* interface{}

---

##### `EnablePullRequestPreview`<sup>Required</sup> <a name="EnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```go
func EnablePullRequestPreview() interface{}
```

- *Type:* interface{}

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `PullRequestEnvironmentName`<sup>Required</sup> <a name="PullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```go
func PullRequestEnvironmentName() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppBasicAuthConfigOutputReference <a name="AmplifyAppBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppBasicAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AmplifyAppBasicAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```go
func ResetEnableBasicAuth()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```go
func EnableBasicAuthInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```go
func EnableBasicAuth() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppCacheConfigOutputReference <a name="AmplifyAppCacheConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppCacheConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AmplifyAppCacheConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppCustomRulesList <a name="AmplifyAppCustomRulesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppCustomRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AmplifyAppCustomRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get"></a>

```go
func Get(index *f64) AmplifyAppCustomRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppCustomRulesOutputReference <a name="AmplifyAppCustomRulesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppCustomRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AmplifyAppCustomRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppEnvironmentVariablesList <a name="AmplifyAppEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AmplifyAppEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) AmplifyAppEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppEnvironmentVariablesOutputReference <a name="AmplifyAppEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AmplifyAppEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppJobConfigOutputReference <a name="AmplifyAppJobConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppJobConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AmplifyAppJobConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType">ResetBuildComputeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildComputeType` <a name="ResetBuildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType"></a>

```go
func ResetBuildComputeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput">BuildComputeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType">BuildComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildComputeTypeInput`<sup>Optional</sup> <a name="BuildComputeTypeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput"></a>

```go
func BuildComputeTypeInput() *string
```

- *Type:* *string

---

##### `BuildComputeType`<sup>Required</sup> <a name="BuildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType"></a>

```go
func BuildComputeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppTagsList <a name="AmplifyAppTagsList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AmplifyAppTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get"></a>

```go
func Get(index *f64) AmplifyAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AmplifyAppTagsOutputReference <a name="AmplifyAppTagsOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/amplifyapp"

amplifyapp.NewAmplifyAppTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AmplifyAppTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



