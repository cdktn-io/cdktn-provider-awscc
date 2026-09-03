# `cloudformationChangeSet` Submodule <a name="`cloudformationChangeSet` Submodule" id="@cdktn/provider-awscc.cloudformationChangeSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationChangeSet <a name="CloudformationChangeSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set awscc_cloudformation_change_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

cloudformationchangeset.NewCloudformationChangeSet(scope Construct, id *string, config CloudformationChangeSetConfig) CloudformationChangeSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig">CloudformationChangeSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig">CloudformationChangeSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType">ResetChangeSetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode">ResetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources">ResetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks">ResetIncludeNestedStacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs">ResetNotificationArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure">ResetOnStackFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl">ResetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate">ResetUsePreviousTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetChangeSetType` <a name="ResetChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType"></a>

```go
func ResetChangeSetType()
```

##### `ResetDeploymentMode` <a name="ResetDeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode"></a>

```go
func ResetDeploymentMode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetImportExistingResources` <a name="ResetImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources"></a>

```go
func ResetImportExistingResources()
```

##### `ResetIncludeNestedStacks` <a name="ResetIncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks"></a>

```go
func ResetIncludeNestedStacks()
```

##### `ResetNotificationArNs` <a name="ResetNotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs"></a>

```go
func ResetNotificationArNs()
```

##### `ResetOnStackFailure` <a name="ResetOnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure"></a>

```go
func ResetOnStackFailure()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody"></a>

```go
func ResetTemplateBody()
```

##### `ResetTemplateUrl` <a name="ResetTemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl"></a>

```go
func ResetTemplateUrl()
```

##### `ResetUsePreviousTemplate` <a name="ResetUsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate"></a>

```go
func ResetUsePreviousTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

cloudformationchangeset.CloudformationChangeSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

cloudformationchangeset.CloudformationChangeSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

cloudformationchangeset.CloudformationChangeSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

cloudformationchangeset.CloudformationChangeSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationChangeSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationChangeSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationChangeSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId">ChangeSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput">ChangeSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput">ChangeSetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput">DeploymentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput">ImportExistingResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput">IncludeNestedStacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput">NotificationArNsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput">OnStackFailureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput">StackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput">TemplateBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput">TemplateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput">UsePreviousTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName">ChangeSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType">ChangeSetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode">DeploymentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources">ImportExistingResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks">IncludeNestedStacks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs">NotificationArNs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure">OnStackFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName">StackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody">TemplateBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl">TemplateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate">UsePreviousTemplate</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChangeSetId`<sup>Required</sup> <a name="ChangeSetId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId"></a>

```go
func ChangeSetId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags"></a>

```go
func Tags() CloudformationChangeSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChangeSetNameInput`<sup>Optional</sup> <a name="ChangeSetNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput"></a>

```go
func ChangeSetNameInput() *string
```

- *Type:* *string

---

##### `ChangeSetTypeInput`<sup>Optional</sup> <a name="ChangeSetTypeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput"></a>

```go
func ChangeSetTypeInput() *string
```

- *Type:* *string

---

##### `DeploymentModeInput`<sup>Optional</sup> <a name="DeploymentModeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput"></a>

```go
func DeploymentModeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ImportExistingResourcesInput`<sup>Optional</sup> <a name="ImportExistingResourcesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput"></a>

```go
func ImportExistingResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeNestedStacksInput`<sup>Optional</sup> <a name="IncludeNestedStacksInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput"></a>

```go
func IncludeNestedStacksInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationArNsInput`<sup>Optional</sup> <a name="NotificationArNsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput"></a>

```go
func NotificationArNsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OnStackFailureInput`<sup>Optional</sup> <a name="OnStackFailureInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput"></a>

```go
func OnStackFailureInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StackNameInput`<sup>Optional</sup> <a name="StackNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput"></a>

```go
func StackNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput"></a>

```go
func TemplateBodyInput() *string
```

- *Type:* *string

---

##### `TemplateUrlInput`<sup>Optional</sup> <a name="TemplateUrlInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput"></a>

```go
func TemplateUrlInput() *string
```

- *Type:* *string

---

##### `UsePreviousTemplateInput`<sup>Optional</sup> <a name="UsePreviousTemplateInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput"></a>

```go
func UsePreviousTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `ChangeSetName`<sup>Required</sup> <a name="ChangeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName"></a>

```go
func ChangeSetName() *string
```

- *Type:* *string

---

##### `ChangeSetType`<sup>Required</sup> <a name="ChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType"></a>

```go
func ChangeSetType() *string
```

- *Type:* *string

---

##### `DeploymentMode`<sup>Required</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode"></a>

```go
func DeploymentMode() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ImportExistingResources`<sup>Required</sup> <a name="ImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources"></a>

```go
func ImportExistingResources() interface{}
```

- *Type:* interface{}

---

##### `IncludeNestedStacks`<sup>Required</sup> <a name="IncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks"></a>

```go
func IncludeNestedStacks() interface{}
```

- *Type:* interface{}

---

##### `NotificationArNs`<sup>Required</sup> <a name="NotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs"></a>

```go
func NotificationArNs() *[]*string
```

- *Type:* *[]*string

---

##### `OnStackFailure`<sup>Required</sup> <a name="OnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure"></a>

```go
func OnStackFailure() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName"></a>

```go
func StackName() *string
```

- *Type:* *string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody"></a>

```go
func TemplateBody() *string
```

- *Type:* *string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl"></a>

```go
func TemplateUrl() *string
```

- *Type:* *string

---

##### `UsePreviousTemplate`<sup>Required</sup> <a name="UsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate"></a>

```go
func UsePreviousTemplate() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationChangeSetConfig <a name="CloudformationChangeSetConfig" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

&cloudformationchangeset.CloudformationChangeSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChangeSetName: *string,
	StackName: *string,
	Capabilities: *[]*string,
	ChangeSetType: *string,
	DeploymentMode: *string,
	Description: *string,
	ImportExistingResources: interface{},
	IncludeNestedStacks: interface{},
	NotificationArNs: *[]*string,
	OnStackFailure: *string,
	RoleArn: *string,
	Tags: interface{},
	TemplateBody: *string,
	TemplateUrl: *string,
	UsePreviousTemplate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName">ChangeSetName</a></code> | <code>*string</code> | The name of the change set. Must be unique among all change sets associated with the specified stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName">StackName</a></code> | <code>*string</code> | The name or unique ID of the stack for which you are creating a change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | The capabilities that are allowed in the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType">ChangeSetType</a></code> | <code>*string</code> | The type of change set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode">DeploymentMode</a></code> | <code>*string</code> | Determines how CloudFormation handles configuration drift during deployment. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description">Description</a></code> | <code>*string</code> | A description to help you identify this change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources">ImportExistingResources</a></code> | <code>interface{}</code> | Indicates if the change set imports resources that already exist. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks">IncludeNestedStacks</a></code> | <code>interface{}</code> | Creates a change set for all nested stacks specified in the template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs">NotificationArNs</a></code> | <code>*[]*string</code> | The ARNs of Amazon SNS topics that CloudFormation associates with the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure">OnStackFailure</a></code> | <code>*string</code> | Determines what action will be taken if stack creation fails. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of an IAM role that CloudFormation assumes when executing the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs to associate with the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody">TemplateBody</a></code> | <code>*string</code> | A structure that contains the body of the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl">TemplateUrl</a></code> | <code>*string</code> | The URL of the file that contains the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate">UsePreviousTemplate</a></code> | <code>interface{}</code> | Whether to reuse the template associated with the stack to create the change set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChangeSetName`<sup>Required</sup> <a name="ChangeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName"></a>

```go
ChangeSetName *string
```

- *Type:* *string

The name of the change set. Must be unique among all change sets associated with the specified stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_name CloudformationChangeSet#change_set_name}

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName"></a>

```go
StackName *string
```

- *Type:* *string

The name or unique ID of the stack for which you are creating a change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#stack_name CloudformationChangeSet#stack_name}

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

The capabilities that are allowed in the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#capabilities CloudformationChangeSet#capabilities}

---

##### `ChangeSetType`<sup>Optional</sup> <a name="ChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType"></a>

```go
ChangeSetType *string
```

- *Type:* *string

The type of change set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_type CloudformationChangeSet#change_set_type}

---

##### `DeploymentMode`<sup>Optional</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode"></a>

```go
DeploymentMode *string
```

- *Type:* *string

Determines how CloudFormation handles configuration drift during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#deployment_mode CloudformationChangeSet#deployment_mode}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description to help you identify this change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#description CloudformationChangeSet#description}

---

##### `ImportExistingResources`<sup>Optional</sup> <a name="ImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources"></a>

```go
ImportExistingResources interface{}
```

- *Type:* interface{}

Indicates if the change set imports resources that already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#import_existing_resources CloudformationChangeSet#import_existing_resources}

---

##### `IncludeNestedStacks`<sup>Optional</sup> <a name="IncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks"></a>

```go
IncludeNestedStacks interface{}
```

- *Type:* interface{}

Creates a change set for all nested stacks specified in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#include_nested_stacks CloudformationChangeSet#include_nested_stacks}

---

##### `NotificationArNs`<sup>Optional</sup> <a name="NotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs"></a>

```go
NotificationArNs *[]*string
```

- *Type:* *[]*string

The ARNs of Amazon SNS topics that CloudFormation associates with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#notification_ar_ns CloudformationChangeSet#notification_ar_ns}

---

##### `OnStackFailure`<sup>Optional</sup> <a name="OnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure"></a>

```go
OnStackFailure *string
```

- *Type:* *string

Determines what action will be taken if stack creation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#on_stack_failure CloudformationChangeSet#on_stack_failure}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of an IAM role that CloudFormation assumes when executing the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#role_arn CloudformationChangeSet#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs to associate with the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#tags CloudformationChangeSet#tags}

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody"></a>

```go
TemplateBody *string
```

- *Type:* *string

A structure that contains the body of the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_body CloudformationChangeSet#template_body}

---

##### `TemplateUrl`<sup>Optional</sup> <a name="TemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl"></a>

```go
TemplateUrl *string
```

- *Type:* *string

The URL of the file that contains the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_url CloudformationChangeSet#template_url}

---

##### `UsePreviousTemplate`<sup>Optional</sup> <a name="UsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate"></a>

```go
UsePreviousTemplate interface{}
```

- *Type:* interface{}

Whether to reuse the template associated with the stack to create the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#use_previous_template CloudformationChangeSet#use_previous_template}

---

### CloudformationChangeSetTags <a name="CloudformationChangeSetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

&cloudformationchangeset.CloudformationChangeSetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationChangeSetTagsList <a name="CloudformationChangeSetTagsList" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

cloudformationchangeset.NewCloudformationChangeSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudformationChangeSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get"></a>

```go
func Get(index *f64) CloudformationChangeSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationChangeSetTagsOutputReference <a name="CloudformationChangeSetTagsOutputReference" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationchangeset"

cloudformationchangeset.NewCloudformationChangeSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudformationChangeSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



