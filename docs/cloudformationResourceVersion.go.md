# `cloudformationResourceVersion` Submodule <a name="`cloudformationResourceVersion` Submodule" id="@cdktn/provider-awscc.cloudformationResourceVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationResourceVersion <a name="CloudformationResourceVersion" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version awscc_cloudformation_resource_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

cloudformationresourceversion.NewCloudformationResourceVersion(scope Construct, id *string, config CloudformationResourceVersionConfig) CloudformationResourceVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig">CloudformationResourceVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig">CloudformationResourceVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.putLoggingConfig"></a>

```go
func PutLoggingConfig(value CloudformationResourceVersionLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a>

---

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.resetLoggingConfig"></a>

```go
func ResetLoggingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationResourceVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

cloudformationresourceversion.CloudformationResourceVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

cloudformationresourceversion.CloudformationResourceVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

cloudformationresourceversion.CloudformationResourceVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

cloudformationresourceversion.CloudformationResourceVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudformationResourceVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationResourceVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationResourceVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationResourceVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.isDefaultVersion">IsDefaultVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference">CloudformationResourceVersionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioningType">ProvisioningType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeArn">TypeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfigInput">LoggingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackageInput">SchemaHandlerPackageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackage">SchemaHandlerPackage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefaultVersion`<sup>Required</sup> <a name="IsDefaultVersion" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.isDefaultVersion"></a>

```go
func IsDefaultVersion() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfig"></a>

```go
func LoggingConfig() CloudformationResourceVersionLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference">CloudformationResourceVersionLoggingConfigOutputReference</a>

---

##### `ProvisioningType`<sup>Required</sup> <a name="ProvisioningType" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.provisioningType"></a>

```go
func ProvisioningType() *string
```

- *Type:* *string

---

##### `TypeArn`<sup>Required</sup> <a name="TypeArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeArn"></a>

```go
func TypeArn() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.loggingConfigInput"></a>

```go
func LoggingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaHandlerPackageInput`<sup>Optional</sup> <a name="SchemaHandlerPackageInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackageInput"></a>

```go
func SchemaHandlerPackageInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `SchemaHandlerPackage`<sup>Required</sup> <a name="SchemaHandlerPackage" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.schemaHandlerPackage"></a>

```go
func SchemaHandlerPackage() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationResourceVersionConfig <a name="CloudformationResourceVersionConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

&cloudformationresourceversion.CloudformationResourceVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SchemaHandlerPackage: *string,
	TypeName: *string,
	ExecutionRoleArn: *string,
	LoggingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.schemaHandlerPackage">SchemaHandlerPackage</a></code> | <code>*string</code> | A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.typeName">TypeName</a></code> | <code>*string</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a></code> | Specifies logging configuration information for a type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SchemaHandlerPackage`<sup>Required</sup> <a name="SchemaHandlerPackage" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.schemaHandlerPackage"></a>

```go
SchemaHandlerPackage *string
```

- *Type:* *string

A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.

For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version#schema_handler_package CloudformationResourceVersion#schema_handler_package}

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version#type_name CloudformationResourceVersion#type_name}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version#execution_role_arn CloudformationResourceVersion#execution_role_arn}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionConfig.property.loggingConfig"></a>

```go
LoggingConfig CloudformationResourceVersionLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig">CloudformationResourceVersionLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version#logging_config CloudformationResourceVersion#logging_config}

---

### CloudformationResourceVersionLoggingConfig <a name="CloudformationResourceVersionLoggingConfig" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

&cloudformationresourceversion.CloudformationResourceVersionLoggingConfig {
	LogGroupName: *string,
	LogRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logRoleArn">LogRoleArn</a></code> | <code>*string</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version#log_group_name CloudformationResourceVersion#log_group_name}

---

##### `LogRoleArn`<sup>Optional</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfig.property.logRoleArn"></a>

```go
LogRoleArn *string
```

- *Type:* *string

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_resource_version#log_role_arn CloudformationResourceVersion#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationResourceVersionLoggingConfigOutputReference <a name="CloudformationResourceVersionLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationresourceversion"

cloudformationresourceversion.NewCloudformationResourceVersionLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationResourceVersionLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogRoleArn">ResetLogRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```

##### `ResetLogRoleArn` <a name="ResetLogRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.resetLogRoleArn"></a>

```go
func ResetLogRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArnInput">LogRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArn">LogRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `LogRoleArnInput`<sup>Optional</sup> <a name="LogRoleArnInput" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArnInput"></a>

```go
func LogRoleArnInput() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogRoleArn`<sup>Required</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.logRoleArn"></a>

```go
func LogRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationResourceVersion.CloudformationResourceVersionLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



