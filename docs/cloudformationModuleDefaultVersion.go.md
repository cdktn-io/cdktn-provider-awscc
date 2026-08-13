# `cloudformationModuleDefaultVersion` Submodule <a name="`cloudformationModuleDefaultVersion` Submodule" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationModuleDefaultVersion <a name="CloudformationModuleDefaultVersion" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_module_default_version awscc_cloudformation_module_default_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationmoduledefaultversion"

cloudformationmoduledefaultversion.NewCloudformationModuleDefaultVersion(scope Construct, id *string, config CloudformationModuleDefaultVersionConfig) CloudformationModuleDefaultVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig">CloudformationModuleDefaultVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig">CloudformationModuleDefaultVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetModuleName">ResetModuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetArn"></a>

```go
func ResetArn()
```

##### `ResetModuleName` <a name="ResetModuleName" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetModuleName"></a>

```go
func ResetModuleName()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.resetVersionId"></a>

```go
func ResetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationModuleDefaultVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationmoduledefaultversion"

cloudformationmoduledefaultversion.CloudformationModuleDefaultVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationmoduledefaultversion"

cloudformationmoduledefaultversion.CloudformationModuleDefaultVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationmoduledefaultversion"

cloudformationmoduledefaultversion.CloudformationModuleDefaultVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationmoduledefaultversion"

cloudformationmoduledefaultversion.CloudformationModuleDefaultVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudformationModuleDefaultVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationModuleDefaultVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationModuleDefaultVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_module_default_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationModuleDefaultVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationModuleDefaultVersionConfig <a name="CloudformationModuleDefaultVersionConfig" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationmoduledefaultversion"

&cloudformationmoduledefaultversion.CloudformationModuleDefaultVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	ModuleName: *string,
	VersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.arn">Arn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the module version to set as the default version. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.moduleName">ModuleName</a></code> | <code>*string</code> | The name of a module existing in the registry. |
| <code><a href="#@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.versionId">VersionId</a></code> | <code>*string</code> | The ID of an existing version of the named module to set as the default. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the module version to set as the default version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_module_default_version#arn CloudformationModuleDefaultVersion#arn}

---

##### `ModuleName`<sup>Optional</sup> <a name="ModuleName" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

The name of a module existing in the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_module_default_version#module_name CloudformationModuleDefaultVersion#module_name}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-awscc.cloudformationModuleDefaultVersion.CloudformationModuleDefaultVersionConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

The ID of an existing version of the named module to set as the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_module_default_version#version_id CloudformationModuleDefaultVersion#version_id}

---



