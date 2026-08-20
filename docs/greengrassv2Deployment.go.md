# `greengrassv2Deployment` Submodule <a name="`greengrassv2Deployment` Submodule" id="@cdktn/provider-awscc.greengrassv2Deployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Greengrassv2Deployment <a name="Greengrassv2Deployment" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment awscc_greengrassv2_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2Deployment(scope Construct, id *string, config Greengrassv2DeploymentConfig) Greengrassv2Deployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig">Greengrassv2DeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig">Greengrassv2DeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents">PutComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies">PutDeploymentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration">PutIotJobConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetComponents">ResetComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentName">ResetDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentPolicies">ResetDeploymentPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetIotJobConfiguration">ResetIotJobConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetParentTargetArn">ResetParentTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponents` <a name="PutComponents" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents"></a>

```go
func PutComponents(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putComponents.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeploymentPolicies` <a name="PutDeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies"></a>

```go
func PutDeploymentPolicies(value Greengrassv2DeploymentDeploymentPolicies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putDeploymentPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

---

##### `PutIotJobConfiguration` <a name="PutIotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration"></a>

```go
func PutIotJobConfiguration(value Greengrassv2DeploymentIotJobConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.putIotJobConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

---

##### `ResetComponents` <a name="ResetComponents" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetComponents"></a>

```go
func ResetComponents()
```

##### `ResetDeploymentName` <a name="ResetDeploymentName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentName"></a>

```go
func ResetDeploymentName()
```

##### `ResetDeploymentPolicies` <a name="ResetDeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetDeploymentPolicies"></a>

```go
func ResetDeploymentPolicies()
```

##### `ResetIotJobConfiguration` <a name="ResetIotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetIotJobConfiguration"></a>

```go
func ResetIotJobConfiguration()
```

##### `ResetParentTargetArn` <a name="ResetParentTargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetParentTargetArn"></a>

```go
func ResetParentTargetArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Greengrassv2Deployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.Greengrassv2Deployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.Greengrassv2Deployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.Greengrassv2Deployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.Greengrassv2Deployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Greengrassv2Deployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Greengrassv2Deployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Greengrassv2Deployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Greengrassv2Deployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.components">Components</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap">Greengrassv2DeploymentComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPolicies">DeploymentPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference">Greengrassv2DeploymentDeploymentPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfiguration">IotJobConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference">Greengrassv2DeploymentIotJobConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.componentsInput">ComponentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentNameInput">DeploymentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPoliciesInput">DeploymentPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfigurationInput">IotJobConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArnInput">ParentTargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArnInput">TargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentName">DeploymentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArn">ParentTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.components"></a>

```go
func Components() Greengrassv2DeploymentComponentsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap">Greengrassv2DeploymentComponentsMap</a>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `DeploymentPolicies`<sup>Required</sup> <a name="DeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPolicies"></a>

```go
func DeploymentPolicies() Greengrassv2DeploymentDeploymentPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference">Greengrassv2DeploymentDeploymentPoliciesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IotJobConfiguration`<sup>Required</sup> <a name="IotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfiguration"></a>

```go
func IotJobConfiguration() Greengrassv2DeploymentIotJobConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference">Greengrassv2DeploymentIotJobConfigurationOutputReference</a>

---

##### `ComponentsInput`<sup>Optional</sup> <a name="ComponentsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.componentsInput"></a>

```go
func ComponentsInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentNameInput`<sup>Optional</sup> <a name="DeploymentNameInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentNameInput"></a>

```go
func DeploymentNameInput() *string
```

- *Type:* *string

---

##### `DeploymentPoliciesInput`<sup>Optional</sup> <a name="DeploymentPoliciesInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentPoliciesInput"></a>

```go
func DeploymentPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `IotJobConfigurationInput`<sup>Optional</sup> <a name="IotJobConfigurationInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.iotJobConfigurationInput"></a>

```go
func IotJobConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ParentTargetArnInput`<sup>Optional</sup> <a name="ParentTargetArnInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArnInput"></a>

```go
func ParentTargetArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArnInput"></a>

```go
func TargetArnInput() *string
```

- *Type:* *string

---

##### `DeploymentName`<sup>Required</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.deploymentName"></a>

```go
func DeploymentName() *string
```

- *Type:* *string

---

##### `ParentTargetArn`<sup>Required</sup> <a name="ParentTargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.parentTargetArn"></a>

```go
func ParentTargetArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2Deployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Greengrassv2DeploymentComponents <a name="Greengrassv2DeploymentComponents" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentComponents {
	ComponentVersion: *string,
	ConfigurationUpdate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate,
	RunWith: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.componentVersion">ComponentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_version Greengrassv2Deployment#component_version}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.configurationUpdate">ConfigurationUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_update Greengrassv2Deployment#configuration_update}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.runWith">RunWith</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#run_with Greengrassv2Deployment#run_with}. |

---

##### `ComponentVersion`<sup>Optional</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.componentVersion"></a>

```go
ComponentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_version Greengrassv2Deployment#component_version}.

---

##### `ConfigurationUpdate`<sup>Optional</sup> <a name="ConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.configurationUpdate"></a>

```go
ConfigurationUpdate Greengrassv2DeploymentComponentsConfigurationUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_update Greengrassv2Deployment#configuration_update}.

---

##### `RunWith`<sup>Optional</sup> <a name="RunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponents.property.runWith"></a>

```go
RunWith Greengrassv2DeploymentComponentsRunWith
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#run_with Greengrassv2Deployment#run_with}.

---

### Greengrassv2DeploymentComponentsConfigurationUpdate <a name="Greengrassv2DeploymentComponentsConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentComponentsConfigurationUpdate {
	Merge: *string,
	Reset: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.merge">Merge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#merge Greengrassv2Deployment#merge}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.reset">Reset</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#reset Greengrassv2Deployment#reset}. |

---

##### `Merge`<sup>Optional</sup> <a name="Merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.merge"></a>

```go
Merge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#merge Greengrassv2Deployment#merge}.

---

##### `Reset`<sup>Optional</sup> <a name="Reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate.property.reset"></a>

```go
Reset *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#reset Greengrassv2Deployment#reset}.

---

### Greengrassv2DeploymentComponentsRunWith <a name="Greengrassv2DeploymentComponentsRunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentComponentsRunWith {
	PosixUser: *string,
	SystemResourceLimits: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits,
	WindowsUser: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.posixUser">PosixUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#posix_user Greengrassv2Deployment#posix_user}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.systemResourceLimits">SystemResourceLimits</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#system_resource_limits Greengrassv2Deployment#system_resource_limits}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.windowsUser">WindowsUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#windows_user Greengrassv2Deployment#windows_user}. |

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.posixUser"></a>

```go
PosixUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#posix_user Greengrassv2Deployment#posix_user}.

---

##### `SystemResourceLimits`<sup>Optional</sup> <a name="SystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.systemResourceLimits"></a>

```go
SystemResourceLimits Greengrassv2DeploymentComponentsRunWithSystemResourceLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#system_resource_limits Greengrassv2Deployment#system_resource_limits}.

---

##### `WindowsUser`<sup>Optional</sup> <a name="WindowsUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith.property.windowsUser"></a>

```go
WindowsUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#windows_user Greengrassv2Deployment#windows_user}.

---

### Greengrassv2DeploymentComponentsRunWithSystemResourceLimits <a name="Greengrassv2DeploymentComponentsRunWithSystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits {
	Cpus: *f64,
	Memory: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.cpus">Cpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#cpus Greengrassv2Deployment#cpus}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.memory">Memory</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#memory Greengrassv2Deployment#memory}. |

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.cpus"></a>

```go
Cpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#cpus Greengrassv2Deployment#cpus}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#memory Greengrassv2Deployment#memory}.

---

### Greengrassv2DeploymentConfig <a name="Greengrassv2DeploymentConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TargetArn: *string,
	Components: interface{},
	DeploymentName: *string,
	DeploymentPolicies: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies,
	IotJobConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration,
	ParentTargetArn: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.targetArn">TargetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.components">Components</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentName">DeploymentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentPolicies">DeploymentPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.iotJobConfiguration">IotJobConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.parentTargetArn">ParentTargetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.targetArn"></a>

```go
TargetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#target_arn Greengrassv2Deployment#target_arn}.

---

##### `Components`<sup>Optional</sup> <a name="Components" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.components"></a>

```go
Components interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#components Greengrassv2Deployment#components}.

---

##### `DeploymentName`<sup>Optional</sup> <a name="DeploymentName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentName"></a>

```go
DeploymentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_name Greengrassv2Deployment#deployment_name}.

---

##### `DeploymentPolicies`<sup>Optional</sup> <a name="DeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.deploymentPolicies"></a>

```go
DeploymentPolicies Greengrassv2DeploymentDeploymentPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies">Greengrassv2DeploymentDeploymentPolicies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#deployment_policies Greengrassv2Deployment#deployment_policies}.

---

##### `IotJobConfiguration`<sup>Optional</sup> <a name="IotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.iotJobConfiguration"></a>

```go
IotJobConfiguration Greengrassv2DeploymentIotJobConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration">Greengrassv2DeploymentIotJobConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#iot_job_configuration Greengrassv2Deployment#iot_job_configuration}.

---

##### `ParentTargetArn`<sup>Optional</sup> <a name="ParentTargetArn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.parentTargetArn"></a>

```go
ParentTargetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#parent_target_arn Greengrassv2Deployment#parent_target_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#tags Greengrassv2Deployment#tags}.

---

### Greengrassv2DeploymentDeploymentPolicies <a name="Greengrassv2DeploymentDeploymentPolicies" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentDeploymentPolicies {
	ComponentUpdatePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy,
	ConfigurationValidationPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy,
	FailureHandlingPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.componentUpdatePolicy">ComponentUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_update_policy Greengrassv2Deployment#component_update_policy}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.configurationValidationPolicy">ConfigurationValidationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_validation_policy Greengrassv2Deployment#configuration_validation_policy}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.failureHandlingPolicy">FailureHandlingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_handling_policy Greengrassv2Deployment#failure_handling_policy}. |

---

##### `ComponentUpdatePolicy`<sup>Optional</sup> <a name="ComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.componentUpdatePolicy"></a>

```go
ComponentUpdatePolicy Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#component_update_policy Greengrassv2Deployment#component_update_policy}.

---

##### `ConfigurationValidationPolicy`<sup>Optional</sup> <a name="ConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.configurationValidationPolicy"></a>

```go
ConfigurationValidationPolicy Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#configuration_validation_policy Greengrassv2Deployment#configuration_validation_policy}.

---

##### `FailureHandlingPolicy`<sup>Optional</sup> <a name="FailureHandlingPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPolicies.property.failureHandlingPolicy"></a>

```go
FailureHandlingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_handling_policy Greengrassv2Deployment#failure_handling_policy}.

---

### Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy <a name="Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy {
	Action: *string,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

### Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy <a name="Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy {
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}. |

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_in_seconds Greengrassv2Deployment#timeout_in_seconds}.

---

### Greengrassv2DeploymentIotJobConfiguration <a name="Greengrassv2DeploymentIotJobConfiguration" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentIotJobConfiguration {
	AbortConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig,
	JobExecutionsRolloutConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig,
	TimeoutConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#abort_config Greengrassv2Deployment#abort_config}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#job_executions_rollout_config Greengrassv2Deployment#job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_config Greengrassv2Deployment#timeout_config}. |

---

##### `AbortConfig`<sup>Optional</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.abortConfig"></a>

```go
AbortConfig Greengrassv2DeploymentIotJobConfigurationAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#abort_config Greengrassv2Deployment#abort_config}.

---

##### `JobExecutionsRolloutConfig`<sup>Optional</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.jobExecutionsRolloutConfig"></a>

```go
JobExecutionsRolloutConfig Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#job_executions_rollout_config Greengrassv2Deployment#job_executions_rollout_config}.

---

##### `TimeoutConfig`<sup>Optional</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfiguration.property.timeoutConfig"></a>

```go
TimeoutConfig Greengrassv2DeploymentIotJobConfigurationTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#timeout_config Greengrassv2Deployment#timeout_config}.

---

### Greengrassv2DeploymentIotJobConfigurationAbortConfig <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig {
	CriteriaList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.property.criteriaList">CriteriaList</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#criteria_list Greengrassv2Deployment#criteria_list}. |

---

##### `CriteriaList`<sup>Optional</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig.property.criteriaList"></a>

```go
CriteriaList interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#criteria_list Greengrassv2Deployment#criteria_list}.

---

### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct {
	Action: *string,
	FailureType: *string,
	MinNumberOfExecutedThings: *f64,
	ThresholdPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.failureType">FailureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_type Greengrassv2Deployment#failure_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#min_number_of_executed_things Greengrassv2Deployment#min_number_of_executed_things}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#threshold_percentage Greengrassv2Deployment#threshold_percentage}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#action Greengrassv2Deployment#action}.

---

##### `FailureType`<sup>Optional</sup> <a name="FailureType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.failureType"></a>

```go
FailureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#failure_type Greengrassv2Deployment#failure_type}.

---

##### `MinNumberOfExecutedThings`<sup>Optional</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```go
MinNumberOfExecutedThings *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#min_number_of_executed_things Greengrassv2Deployment#min_number_of_executed_things}.

---

##### `ThresholdPercentage`<sup>Optional</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```go
ThresholdPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#threshold_percentage Greengrassv2Deployment#threshold_percentage}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig {
	ExponentialRate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate,
	MaximumPerMinute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#exponential_rate Greengrassv2Deployment#exponential_rate}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#maximum_per_minute Greengrassv2Deployment#maximum_per_minute}. |

---

##### `ExponentialRate`<sup>Optional</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.exponentialRate"></a>

```go
ExponentialRate Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#exponential_rate Greengrassv2Deployment#exponential_rate}.

---

##### `MaximumPerMinute`<sup>Optional</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```go
MaximumPerMinute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#maximum_per_minute Greengrassv2Deployment#maximum_per_minute}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate {
	BaseRatePerMinute: *f64,
	IncrementFactor: *f64,
	RateIncreaseCriteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#base_rate_per_minute Greengrassv2Deployment#base_rate_per_minute}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">IncrementFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#increment_factor Greengrassv2Deployment#increment_factor}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#rate_increase_criteria Greengrassv2Deployment#rate_increase_criteria}. |

---

##### `BaseRatePerMinute`<sup>Optional</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```go
BaseRatePerMinute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#base_rate_per_minute Greengrassv2Deployment#base_rate_per_minute}.

---

##### `IncrementFactor`<sup>Optional</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```go
IncrementFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#increment_factor Greengrassv2Deployment#increment_factor}.

---

##### `RateIncreaseCriteria`<sup>Optional</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```go
RateIncreaseCriteria Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#rate_increase_criteria Greengrassv2Deployment#rate_increase_criteria}.

---

### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
	NumberOfNotifiedThings: *f64,
	NumberOfSucceededThings: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_notified_things Greengrassv2Deployment#number_of_notified_things}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_succeeded_things Greengrassv2Deployment#number_of_succeeded_things}. |

---

##### `NumberOfNotifiedThings`<sup>Optional</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```go
NumberOfNotifiedThings *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_notified_things Greengrassv2Deployment#number_of_notified_things}.

---

##### `NumberOfSucceededThings`<sup>Optional</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```go
NumberOfSucceededThings *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#number_of_succeeded_things Greengrassv2Deployment#number_of_succeeded_things}.

---

### Greengrassv2DeploymentIotJobConfigurationTimeoutConfig <a name="Greengrassv2DeploymentIotJobConfigurationTimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

&greengrassv2deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig {
	InProgressTimeoutInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes Greengrassv2Deployment#in_progress_timeout_in_minutes}. |

---

##### `InProgressTimeoutInMinutes`<sup>Optional</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```go
InProgressTimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/greengrassv2_deployment#in_progress_timeout_in_minutes Greengrassv2Deployment#in_progress_timeout_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference <a name="Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentComponentsConfigurationUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetMerge">ResetMerge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetReset">ResetReset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMerge` <a name="ResetMerge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetMerge"></a>

```go
func ResetMerge()
```

##### `ResetReset` <a name="ResetReset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.resetReset"></a>

```go
func ResetReset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.mergeInput">MergeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.resetInput">ResetInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge">Merge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset">Reset</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MergeInput`<sup>Optional</sup> <a name="MergeInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.mergeInput"></a>

```go
func MergeInput() *string
```

- *Type:* *string

---

##### `ResetInput`<sup>Optional</sup> <a name="ResetInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.resetInput"></a>

```go
func ResetInput() *[]*string
```

- *Type:* *[]*string

---

##### `Merge`<sup>Required</sup> <a name="Merge" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.merge"></a>

```go
func Merge() *string
```

- *Type:* *string

---

##### `Reset`<sup>Required</sup> <a name="Reset" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.reset"></a>

```go
func Reset() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentComponentsMap <a name="Greengrassv2DeploymentComponentsMap" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentComponentsMap(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentComponentsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get"></a>

```go
func Get(key *string) Greengrassv2DeploymentComponentsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentComponentsOutputReference <a name="Greengrassv2DeploymentComponentsOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) Greengrassv2DeploymentComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate">PutConfigurationUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith">PutRunWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetComponentVersion">ResetComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetConfigurationUpdate">ResetConfigurationUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetRunWith">ResetRunWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurationUpdate` <a name="PutConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate"></a>

```go
func PutConfigurationUpdate(value Greengrassv2DeploymentComponentsConfigurationUpdate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putConfigurationUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdate">Greengrassv2DeploymentComponentsConfigurationUpdate</a>

---

##### `PutRunWith` <a name="PutRunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith"></a>

```go
func PutRunWith(value Greengrassv2DeploymentComponentsRunWith)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.putRunWith.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWith">Greengrassv2DeploymentComponentsRunWith</a>

---

##### `ResetComponentVersion` <a name="ResetComponentVersion" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetComponentVersion"></a>

```go
func ResetComponentVersion()
```

##### `ResetConfigurationUpdate` <a name="ResetConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetConfigurationUpdate"></a>

```go
func ResetConfigurationUpdate()
```

##### `ResetRunWith` <a name="ResetRunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.resetRunWith"></a>

```go
func ResetRunWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdate">ConfigurationUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference">Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWith">RunWith</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference">Greengrassv2DeploymentComponentsRunWithOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersionInput">ComponentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdateInput">ConfigurationUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWithInput">RunWithInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersion">ComponentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationUpdate`<sup>Required</sup> <a name="ConfigurationUpdate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdate"></a>

```go
func ConfigurationUpdate() Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference">Greengrassv2DeploymentComponentsConfigurationUpdateOutputReference</a>

---

##### `RunWith`<sup>Required</sup> <a name="RunWith" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWith"></a>

```go
func RunWith() Greengrassv2DeploymentComponentsRunWithOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference">Greengrassv2DeploymentComponentsRunWithOutputReference</a>

---

##### `ComponentVersionInput`<sup>Optional</sup> <a name="ComponentVersionInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersionInput"></a>

```go
func ComponentVersionInput() *string
```

- *Type:* *string

---

##### `ConfigurationUpdateInput`<sup>Optional</sup> <a name="ConfigurationUpdateInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.configurationUpdateInput"></a>

```go
func ConfigurationUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `RunWithInput`<sup>Optional</sup> <a name="RunWithInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.runWithInput"></a>

```go
func RunWithInput() interface{}
```

- *Type:* interface{}

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.componentVersion"></a>

```go
func ComponentVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentComponentsRunWithOutputReference <a name="Greengrassv2DeploymentComponentsRunWithOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentComponentsRunWithOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentComponentsRunWithOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits">PutSystemResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetPosixUser">ResetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetSystemResourceLimits">ResetSystemResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetWindowsUser">ResetWindowsUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSystemResourceLimits` <a name="PutSystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits"></a>

```go
func PutSystemResourceLimits(value Greengrassv2DeploymentComponentsRunWithSystemResourceLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.putSystemResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimits">Greengrassv2DeploymentComponentsRunWithSystemResourceLimits</a>

---

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetPosixUser"></a>

```go
func ResetPosixUser()
```

##### `ResetSystemResourceLimits` <a name="ResetSystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetSystemResourceLimits"></a>

```go
func ResetSystemResourceLimits()
```

##### `ResetWindowsUser` <a name="ResetWindowsUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.resetWindowsUser"></a>

```go
func ResetWindowsUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits">SystemResourceLimits</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUserInput">PosixUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimitsInput">SystemResourceLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUserInput">WindowsUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser">PosixUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser">WindowsUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SystemResourceLimits`<sup>Required</sup> <a name="SystemResourceLimits" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimits"></a>

```go
func SystemResourceLimits() Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference">Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference</a>

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUserInput"></a>

```go
func PosixUserInput() *string
```

- *Type:* *string

---

##### `SystemResourceLimitsInput`<sup>Optional</sup> <a name="SystemResourceLimitsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.systemResourceLimitsInput"></a>

```go
func SystemResourceLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `WindowsUserInput`<sup>Optional</sup> <a name="WindowsUserInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUserInput"></a>

```go
func WindowsUserInput() *string
```

- *Type:* *string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.posixUser"></a>

```go
func PosixUser() *string
```

- *Type:* *string

---

##### `WindowsUser`<sup>Required</sup> <a name="WindowsUser" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.windowsUser"></a>

```go
func WindowsUser() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference <a name="Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpus` <a name="ResetCpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetCpus"></a>

```go
func ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpusInput">CpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus">Cpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpusInput"></a>

```go
func CpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.cpus"></a>

```go
func Cpus() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentComponentsRunWithSystemResourceLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentDeploymentPoliciesOutputReference <a name="Greengrassv2DeploymentDeploymentPoliciesOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentDeploymentPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentDeploymentPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy">PutComponentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy">PutConfigurationValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetComponentUpdatePolicy">ResetComponentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetConfigurationValidationPolicy">ResetConfigurationValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetFailureHandlingPolicy">ResetFailureHandlingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComponentUpdatePolicy` <a name="PutComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy"></a>

```go
func PutComponentUpdatePolicy(value Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putComponentUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicy</a>

---

##### `PutConfigurationValidationPolicy` <a name="PutConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy"></a>

```go
func PutConfigurationValidationPolicy(value Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.putConfigurationValidationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicy</a>

---

##### `ResetComponentUpdatePolicy` <a name="ResetComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetComponentUpdatePolicy"></a>

```go
func ResetComponentUpdatePolicy()
```

##### `ResetConfigurationValidationPolicy` <a name="ResetConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetConfigurationValidationPolicy"></a>

```go
func ResetConfigurationValidationPolicy()
```

##### `ResetFailureHandlingPolicy` <a name="ResetFailureHandlingPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.resetFailureHandlingPolicy"></a>

```go
func ResetFailureHandlingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy">ComponentUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy">ConfigurationValidationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicyInput">ComponentUpdatePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicyInput">ConfigurationValidationPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicyInput">FailureHandlingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy">FailureHandlingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentUpdatePolicy`<sup>Required</sup> <a name="ComponentUpdatePolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicy"></a>

```go
func ComponentUpdatePolicy() Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesComponentUpdatePolicyOutputReference</a>

---

##### `ConfigurationValidationPolicy`<sup>Required</sup> <a name="ConfigurationValidationPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicy"></a>

```go
func ConfigurationValidationPolicy() Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference">Greengrassv2DeploymentDeploymentPoliciesConfigurationValidationPolicyOutputReference</a>

---

##### `ComponentUpdatePolicyInput`<sup>Optional</sup> <a name="ComponentUpdatePolicyInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.componentUpdatePolicyInput"></a>

```go
func ComponentUpdatePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationValidationPolicyInput`<sup>Optional</sup> <a name="ConfigurationValidationPolicyInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.configurationValidationPolicyInput"></a>

```go
func ConfigurationValidationPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `FailureHandlingPolicyInput`<sup>Optional</sup> <a name="FailureHandlingPolicyInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicyInput"></a>

```go
func FailureHandlingPolicyInput() *string
```

- *Type:* *string

---

##### `FailureHandlingPolicy`<sup>Required</sup> <a name="FailureHandlingPolicy" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.failureHandlingPolicy"></a>

```go
func FailureHandlingPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentDeploymentPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get"></a>

```go
func Get(index *f64) Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetFailureType">ResetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">ResetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">ResetThresholdPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetFailureType` <a name="ResetFailureType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```go
func ResetFailureType()
```

##### `ResetMinNumberOfExecutedThings` <a name="ResetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```go
func ResetMinNumberOfExecutedThings()
```

##### `ResetThresholdPercentage` <a name="ResetThresholdPercentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```go
func ResetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">FailureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">MinNumberOfExecutedThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">ThresholdPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `FailureTypeInput`<sup>Optional</sup> <a name="FailureTypeInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```go
func FailureTypeInput() *string
```

- *Type:* *string

---

##### `MinNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="MinNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```go
func MinNumberOfExecutedThingsInput() *f64
```

- *Type:* *f64

---

##### `ThresholdPercentageInput`<sup>Optional</sup> <a name="ThresholdPercentageInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```go
func ThresholdPercentageInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```go
func FailureType() *string
```

- *Type:* *string

---

##### `MinNumberOfExecutedThings`<sup>Required</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```go
func MinNumberOfExecutedThings() *f64
```

- *Type:* *f64

---

##### `ThresholdPercentage`<sup>Required</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```go
func ThresholdPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList">PutCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resetCriteriaList">ResetCriteriaList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteriaList` <a name="PutCriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList"></a>

```go
func PutCriteriaList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCriteriaList` <a name="ResetCriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.resetCriteriaList"></a>

```go
func ResetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList">CriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaListInput">CriteriaListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CriteriaList`<sup>Required</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaList"></a>

```go
func CriteriaList() Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList">Greengrassv2DeploymentIotJobConfigurationAbortConfigCriteriaListStructList</a>

---

##### `CriteriaListInput`<sup>Optional</sup> <a name="CriteriaListInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.criteriaListInput"></a>

```go
func CriteriaListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">PutRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">ResetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">ResetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">ResetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRateIncreaseCriteria` <a name="PutRateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```go
func PutRateIncreaseCriteria(value Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `ResetBaseRatePerMinute` <a name="ResetBaseRatePerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```go
func ResetBaseRatePerMinute()
```

##### `ResetIncrementFactor` <a name="ResetIncrementFactor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```go
func ResetIncrementFactor()
```

##### `ResetRateIncreaseCriteria` <a name="ResetRateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```go
func ResetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">BaseRatePerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">IncrementFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">RateIncreaseCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">IncrementFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateIncreaseCriteria`<sup>Required</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```go
func RateIncreaseCriteria() Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `BaseRatePerMinuteInput`<sup>Optional</sup> <a name="BaseRatePerMinuteInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```go
func BaseRatePerMinuteInput() *f64
```

- *Type:* *f64

---

##### `IncrementFactorInput`<sup>Optional</sup> <a name="IncrementFactorInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```go
func IncrementFactorInput() *f64
```

- *Type:* *f64

---

##### `RateIncreaseCriteriaInput`<sup>Optional</sup> <a name="RateIncreaseCriteriaInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```go
func RateIncreaseCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `BaseRatePerMinute`<sup>Required</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```go
func BaseRatePerMinute() *f64
```

- *Type:* *f64

---

##### `IncrementFactor`<sup>Required</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```go
func IncrementFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">ResetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">ResetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfNotifiedThings` <a name="ResetNumberOfNotifiedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```go
func ResetNumberOfNotifiedThings()
```

##### `ResetNumberOfSucceededThings` <a name="ResetNumberOfSucceededThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```go
func ResetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">NumberOfNotifiedThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">NumberOfSucceededThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfNotifiedThingsInput`<sup>Optional</sup> <a name="NumberOfNotifiedThingsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```go
func NumberOfNotifiedThingsInput() *f64
```

- *Type:* *f64

---

##### `NumberOfSucceededThingsInput`<sup>Optional</sup> <a name="NumberOfSucceededThingsInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```go
func NumberOfSucceededThingsInput() *f64
```

- *Type:* *f64

---

##### `NumberOfNotifiedThings`<sup>Required</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```go
func NumberOfNotifiedThings() *f64
```

- *Type:* *f64

---

##### `NumberOfSucceededThings`<sup>Required</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```go
func NumberOfSucceededThings() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate">PutExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetExponentialRate">ResetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">ResetMaximumPerMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExponentialRate` <a name="PutExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```go
func PutExponentialRate(value Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRate</a>

---

##### `ResetExponentialRate` <a name="ResetExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```go
func ResetExponentialRate()
```

##### `ResetMaximumPerMinute` <a name="ResetMaximumPerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```go
func ResetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">ExponentialRateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">MaximumPerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExponentialRate`<sup>Required</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```go
func ExponentialRate() Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `ExponentialRateInput`<sup>Optional</sup> <a name="ExponentialRateInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```go
func ExponentialRateInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumPerMinuteInput`<sup>Optional</sup> <a name="MaximumPerMinuteInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```go
func MaximumPerMinuteInput() *f64
```

- *Type:* *f64

---

##### `MaximumPerMinute`<sup>Required</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```go
func MaximumPerMinute() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentIotJobConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig">PutAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig">PutJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig">PutTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetAbortConfig">ResetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetJobExecutionsRolloutConfig">ResetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetTimeoutConfig">ResetTimeoutConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbortConfig` <a name="PutAbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig"></a>

```go
func PutAbortConfig(value Greengrassv2DeploymentIotJobConfigurationAbortConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfig">Greengrassv2DeploymentIotJobConfigurationAbortConfig</a>

---

##### `PutJobExecutionsRolloutConfig` <a name="PutJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig"></a>

```go
func PutJobExecutionsRolloutConfig(value Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfig</a>

---

##### `PutTimeoutConfig` <a name="PutTimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig"></a>

```go
func PutTimeoutConfig(value Greengrassv2DeploymentIotJobConfigurationTimeoutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfig">Greengrassv2DeploymentIotJobConfigurationTimeoutConfig</a>

---

##### `ResetAbortConfig` <a name="ResetAbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetAbortConfig"></a>

```go
func ResetAbortConfig()
```

##### `ResetJobExecutionsRolloutConfig` <a name="ResetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetJobExecutionsRolloutConfig"></a>

```go
func ResetJobExecutionsRolloutConfig()
```

##### `ResetTimeoutConfig` <a name="ResetTimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.resetTimeoutConfig"></a>

```go
func ResetTimeoutConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfigInput">AbortConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfigInput">JobExecutionsRolloutConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfigInput">TimeoutConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbortConfig`<sup>Required</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfig"></a>

```go
func AbortConfig() Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationAbortConfigOutputReference</a>

---

##### `JobExecutionsRolloutConfig`<sup>Required</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfig"></a>

```go
func JobExecutionsRolloutConfig() Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationJobExecutionsRolloutConfigOutputReference</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfig"></a>

```go
func TimeoutConfig() Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference">Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference</a>

---

##### `AbortConfigInput`<sup>Optional</sup> <a name="AbortConfigInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.abortConfigInput"></a>

```go
func AbortConfigInput() interface{}
```

- *Type:* interface{}

---

##### `JobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="JobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.jobExecutionsRolloutConfigInput"></a>

```go
func JobExecutionsRolloutConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutConfigInput`<sup>Optional</sup> <a name="TimeoutConfigInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.timeoutConfigInput"></a>

```go
func TimeoutConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference <a name="Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/greengrassv2deployment"

greengrassv2deployment.NewGreengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">ResetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInProgressTimeoutInMinutes` <a name="ResetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```go
func ResetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">InProgressTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="InProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```go
func InProgressTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `InProgressTimeoutInMinutes`<sup>Required</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```go
func InProgressTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.greengrassv2Deployment.Greengrassv2DeploymentIotJobConfigurationTimeoutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



