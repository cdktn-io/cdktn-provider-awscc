# `cloudformationTypeActivation` Submodule <a name="`cloudformationTypeActivation` Submodule" id="@cdktn/provider-awscc.cloudformationTypeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationTypeActivation <a name="CloudformationTypeActivation" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation awscc_cloudformation_type_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

cloudformationtypeactivation.NewCloudformationTypeActivation(scope Construct, id *string, config CloudformationTypeActivationConfig) CloudformationTypeActivation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig">CloudformationTypeActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig">CloudformationTypeActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate">ResetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion">ResetMajorVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn">ResetPublicTypeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId">ResetPublisherId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias">ResetTypeNameAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump">ResetVersionBump</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig"></a>

```go
func PutLoggingConfig(value CloudformationTypeActivationLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `ResetAutoUpdate` <a name="ResetAutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate"></a>

```go
func ResetAutoUpdate()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

##### `ResetMajorVersion` <a name="ResetMajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion"></a>

```go
func ResetMajorVersion()
```

##### `ResetPublicTypeArn` <a name="ResetPublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn"></a>

```go
func ResetPublicTypeArn()
```

##### `ResetPublisherId` <a name="ResetPublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId"></a>

```go
func ResetPublisherId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType"></a>

```go
func ResetType()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName"></a>

```go
func ResetTypeName()
```

##### `ResetTypeNameAlias` <a name="ResetTypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias"></a>

```go
func ResetTypeNameAlias()
```

##### `ResetVersionBump` <a name="ResetVersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump"></a>

```go
func ResetVersionBump()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

cloudformationtypeactivation.CloudformationTypeActivation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

cloudformationtypeactivation.CloudformationTypeActivation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

cloudformationtypeactivation.CloudformationTypeActivation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

cloudformationtypeactivation.CloudformationTypeActivation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationTypeActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationTypeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationTypeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput">AutoUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput">MajorVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput">PublicTypeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput">PublisherIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput">TypeNameAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput">VersionBumpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate">AutoUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion">MajorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn">PublicTypeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId">PublisherId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias">TypeNameAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump">VersionBump</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig"></a>

```go
func LoggingConfig() CloudformationTypeActivationLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a>

---

##### `AutoUpdateInput`<sup>Optional</sup> <a name="AutoUpdateInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput"></a>

```go
func AutoUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `MajorVersionInput`<sup>Optional</sup> <a name="MajorVersionInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput"></a>

```go
func MajorVersionInput() *string
```

- *Type:* *string

---

##### `PublicTypeArnInput`<sup>Optional</sup> <a name="PublicTypeArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput"></a>

```go
func PublicTypeArnInput() *string
```

- *Type:* *string

---

##### `PublisherIdInput`<sup>Optional</sup> <a name="PublisherIdInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput"></a>

```go
func PublisherIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameAliasInput`<sup>Optional</sup> <a name="TypeNameAliasInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput"></a>

```go
func TypeNameAliasInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `VersionBumpInput`<sup>Optional</sup> <a name="VersionBumpInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput"></a>

```go
func VersionBumpInput() *string
```

- *Type:* *string

---

##### `AutoUpdate`<sup>Required</sup> <a name="AutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate"></a>

```go
func AutoUpdate() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `MajorVersion`<sup>Required</sup> <a name="MajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion"></a>

```go
func MajorVersion() *string
```

- *Type:* *string

---

##### `PublicTypeArn`<sup>Required</sup> <a name="PublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn"></a>

```go
func PublicTypeArn() *string
```

- *Type:* *string

---

##### `PublisherId`<sup>Required</sup> <a name="PublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId"></a>

```go
func PublisherId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypeNameAlias`<sup>Required</sup> <a name="TypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias"></a>

```go
func TypeNameAlias() *string
```

- *Type:* *string

---

##### `VersionBump`<sup>Required</sup> <a name="VersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump"></a>

```go
func VersionBump() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationTypeActivationConfig <a name="CloudformationTypeActivationConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

&cloudformationtypeactivation.CloudformationTypeActivationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoUpdate: interface{},
	ExecutionRoleArn: *string,
	LoggingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig,
	MajorVersion: *string,
	PublicTypeArn: *string,
	PublisherId: *string,
	Type: *string,
	TypeName: *string,
	TypeNameAlias: *string,
	VersionBump: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate">AutoUpdate</a></code> | <code>interface{}</code> | Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | Specifies logging configuration information for a type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion">MajorVersion</a></code> | <code>*string</code> | The Major Version of the type you want to enable. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn">PublicTypeArn</a></code> | <code>*string</code> | The Amazon Resource Number (ARN) assigned to the public extension upon publication. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId">PublisherId</a></code> | <code>*string</code> | The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type">Type</a></code> | <code>*string</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName">TypeName</a></code> | <code>*string</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias">TypeNameAlias</a></code> | <code>*string</code> | An alias to assign to the public extension in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump">VersionBump</a></code> | <code>*string</code> | Manually updates a previously-enabled type to a new major or minor version, if available. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoUpdate`<sup>Optional</sup> <a name="AutoUpdate" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate"></a>

```go
AutoUpdate interface{}
```

- *Type:* interface{}

Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher.

Major versions released by the publisher must be manually updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#auto_update CloudformationTypeActivation#auto_update}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#execution_role_arn CloudformationTypeActivation#execution_role_arn}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig"></a>

```go
LoggingConfig CloudformationTypeActivationLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#logging_config CloudformationTypeActivation#logging_config}

---

##### `MajorVersion`<sup>Optional</sup> <a name="MajorVersion" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion"></a>

```go
MajorVersion *string
```

- *Type:* *string

The Major Version of the type you want to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#major_version CloudformationTypeActivation#major_version}

---

##### `PublicTypeArn`<sup>Optional</sup> <a name="PublicTypeArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn"></a>

```go
PublicTypeArn *string
```

- *Type:* *string

The Amazon Resource Number (ARN) assigned to the public extension upon publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#public_type_arn CloudformationTypeActivation#public_type_arn}

---

##### `PublisherId`<sup>Optional</sup> <a name="PublisherId" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId"></a>

```go
PublisherId *string
```

- *Type:* *string

The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#publisher_id CloudformationTypeActivation#publisher_id}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#type CloudformationTypeActivation#type}

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#type_name CloudformationTypeActivation#type_name}

---

##### `TypeNameAlias`<sup>Optional</sup> <a name="TypeNameAlias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias"></a>

```go
TypeNameAlias *string
```

- *Type:* *string

An alias to assign to the public extension in this account and region.

If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#type_name_alias CloudformationTypeActivation#type_name_alias}

---

##### `VersionBump`<sup>Optional</sup> <a name="VersionBump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump"></a>

```go
VersionBump *string
```

- *Type:* *string

Manually updates a previously-enabled type to a new major or minor version, if available.

You can also use this parameter to update the value of AutoUpdateEnabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#version_bump CloudformationTypeActivation#version_bump}

---

### CloudformationTypeActivationLoggingConfig <a name="CloudformationTypeActivationLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

&cloudformationtypeactivation.CloudformationTypeActivationLoggingConfig {
	LogGroupName: *string,
	LogRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn">LogRoleArn</a></code> | <code>*string</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#log_group_name CloudformationTypeActivation#log_group_name}

---

##### `LogRoleArn`<sup>Optional</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn"></a>

```go
LogRoleArn *string
```

- *Type:* *string

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_type_activation#log_role_arn CloudformationTypeActivation#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationTypeActivationLoggingConfigOutputReference <a name="CloudformationTypeActivationLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationtypeactivation"

cloudformationtypeactivation.NewCloudformationTypeActivationLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationTypeActivationLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn">ResetLogRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```

##### `ResetLogRoleArn` <a name="ResetLogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn"></a>

```go
func ResetLogRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput">LogRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn">LogRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `LogRoleArnInput`<sup>Optional</sup> <a name="LogRoleArnInput" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput"></a>

```go
func LogRoleArnInput() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogRoleArn`<sup>Required</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn"></a>

```go
func LogRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



