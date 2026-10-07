# `networksecuritymanagerDeployment` Submodule <a name="`networksecuritymanagerDeployment` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerDeployment <a name="NetworksecuritymanagerDeployment" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeployment(scope Construct, id *string, config NetworksecuritymanagerDeploymentConfig) NetworksecuritymanagerDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig">NetworksecuritymanagerDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig">NetworksecuritymanagerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList">PutAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList">PutAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration">PutDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList">ResetAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList">ResetAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration">ResetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription">ResetDeploymentDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedPolicyList` <a name="PutAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList"></a>

```go
func PutAssociatedPolicyList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAssociatedScopeList` <a name="PutAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList"></a>

```go
func PutAssociatedScopeList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeploymentConfiguration` <a name="PutDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration"></a>

```go
func PutDeploymentConfiguration(value NetworksecuritymanagerDeploymentDeploymentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssociatedPolicyList` <a name="ResetAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList"></a>

```go
func ResetAssociatedPolicyList()
```

##### `ResetAssociatedScopeList` <a name="ResetAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList"></a>

```go
func ResetAssociatedScopeList()
```

##### `ResetDeploymentConfiguration` <a name="ResetDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration"></a>

```go
func ResetDeploymentConfiguration()
```

##### `ResetDeploymentDescription` <a name="ResetDeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription"></a>

```go
func ResetDeploymentDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NetworksecuritymanagerDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NetworksecuritymanagerDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NetworksecuritymanagerDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NetworksecuritymanagerDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworksecuritymanagerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworksecuritymanagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList">AssociatedPolicyList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList">AssociatedScopeList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn">DeploymentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput">AssociatedPolicyListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput">AssociatedScopeListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput">DeploymentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput">DeploymentDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput">DeploymentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription">DeploymentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName">DeploymentName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedPolicyList`<sup>Required</sup> <a name="AssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList"></a>

```go
func AssociatedPolicyList() NetworksecuritymanagerDeploymentAssociatedPolicyListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a>

---

##### `AssociatedScopeList`<sup>Required</sup> <a name="AssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList"></a>

```go
func AssociatedScopeList() NetworksecuritymanagerDeploymentAssociatedScopeListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a>

---

##### `DeploymentArn`<sup>Required</sup> <a name="DeploymentArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn"></a>

```go
func DeploymentArn() *string
```

- *Type:* *string

---

##### `DeploymentConfiguration`<sup>Required</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration"></a>

```go
func DeploymentConfiguration() NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags"></a>

```go
func Tags() NetworksecuritymanagerDeploymentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AssociatedPolicyListInput`<sup>Optional</sup> <a name="AssociatedPolicyListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput"></a>

```go
func AssociatedPolicyListInput() interface{}
```

- *Type:* interface{}

---

##### `AssociatedScopeListInput`<sup>Optional</sup> <a name="AssociatedScopeListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput"></a>

```go
func AssociatedScopeListInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentConfigurationInput`<sup>Optional</sup> <a name="DeploymentConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput"></a>

```go
func DeploymentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentDescriptionInput`<sup>Optional</sup> <a name="DeploymentDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput"></a>

```go
func DeploymentDescriptionInput() *string
```

- *Type:* *string

---

##### `DeploymentNameInput`<sup>Optional</sup> <a name="DeploymentNameInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput"></a>

```go
func DeploymentNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentDescription`<sup>Required</sup> <a name="DeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription"></a>

```go
func DeploymentDescription() *string
```

- *Type:* *string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName"></a>

```go
func DeploymentName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStruct <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

&networksecuritymanagerdeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct {
	PolicyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn">PolicyArn</a></code> | <code>*string</code> | ARN of the associated policy. |

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn"></a>

```go
PolicyArn *string
```

- *Type:* *string

ARN of the associated policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#policy_arn NetworksecuritymanagerDeployment#policy_arn}

---

### NetworksecuritymanagerDeploymentAssociatedScopeListStruct <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

&networksecuritymanagerdeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct {
	ScopeArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | ARN of the associated scope. |

---

##### `ScopeArn`<sup>Optional</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn"></a>

```go
ScopeArn *string
```

- *Type:* *string

ARN of the associated scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#scope_arn NetworksecuritymanagerDeployment#scope_arn}

---

### NetworksecuritymanagerDeploymentConfig <a name="NetworksecuritymanagerDeploymentConfig" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

&networksecuritymanagerdeployment.NetworksecuritymanagerDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentName: *string,
	AssociatedPolicyList: interface{},
	AssociatedScopeList: interface{},
	DeploymentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration,
	DeploymentDescription: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName">DeploymentName</a></code> | <code>*string</code> | The name of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList">AssociatedPolicyList</a></code> | <code>interface{}</code> | List of policies associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList">AssociatedScopeList</a></code> | <code>interface{}</code> | List of scopes associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | Configuration settings for the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription">DeploymentDescription</a></code> | <code>*string</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the deployment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName"></a>

```go
DeploymentName *string
```

- *Type:* *string

The name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}

---

##### `AssociatedPolicyList`<sup>Optional</sup> <a name="AssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList"></a>

```go
AssociatedPolicyList interface{}
```

- *Type:* interface{}

List of policies associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}

---

##### `AssociatedScopeList`<sup>Optional</sup> <a name="AssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList"></a>

```go
AssociatedScopeList interface{}
```

- *Type:* interface{}

List of scopes associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}

---

##### `DeploymentConfiguration`<sup>Optional</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration"></a>

```go
DeploymentConfiguration NetworksecuritymanagerDeploymentDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

Configuration settings for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}

---

##### `DeploymentDescription`<sup>Optional</sup> <a name="DeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription"></a>

```go
DeploymentDescription *string
```

- *Type:* *string

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}

---

### NetworksecuritymanagerDeploymentDeploymentConfiguration <a name="NetworksecuritymanagerDeploymentDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

&networksecuritymanagerdeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration {
	EnableCrossAccountVisibility: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility">EnableCrossAccountVisibility</a></code> | <code>interface{}</code> | Whether cross-account visibility is enabled for the deployment. |

---

##### `EnableCrossAccountVisibility`<sup>Optional</sup> <a name="EnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility"></a>

```go
EnableCrossAccountVisibility interface{}
```

- *Type:* interface{}

Whether cross-account visibility is enabled for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}

---

### NetworksecuritymanagerDeploymentTags <a name="NetworksecuritymanagerDeploymentTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

&networksecuritymanagerdeployment.NetworksecuritymanagerDeploymentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStructList <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeploymentAssociatedPolicyListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerDeploymentAssociatedPolicyListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn"></a>

```go
func ResetPolicyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput">PolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput"></a>

```go
func PolicyArnInput() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructList <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeploymentAssociatedScopeListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerDeploymentAssociatedScopeListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn">ResetScopeArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopeArn` <a name="ResetScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn"></a>

```go
func ResetScopeArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput">ScopeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeArnInput`<sup>Optional</sup> <a name="ScopeArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput"></a>

```go
func ScopeArnInput() *string
```

- *Type:* *string

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn"></a>

```go
func ScopeArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference <a name="NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility">ResetEnableCrossAccountVisibility</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableCrossAccountVisibility` <a name="ResetEnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility"></a>

```go
func ResetEnableCrossAccountVisibility()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput">EnableCrossAccountVisibilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility">EnableCrossAccountVisibility</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableCrossAccountVisibilityInput`<sup>Optional</sup> <a name="EnableCrossAccountVisibilityInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput"></a>

```go
func EnableCrossAccountVisibilityInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCrossAccountVisibility`<sup>Required</sup> <a name="EnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility"></a>

```go
func EnableCrossAccountVisibility() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerDeploymentTagsList <a name="NetworksecuritymanagerDeploymentTagsList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeploymentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerDeploymentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerDeploymentTagsOutputReference <a name="NetworksecuritymanagerDeploymentTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerdeployment"

networksecuritymanagerdeployment.NewNetworksecuritymanagerDeploymentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerDeploymentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



