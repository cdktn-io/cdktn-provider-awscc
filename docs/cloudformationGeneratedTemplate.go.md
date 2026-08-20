# `cloudformationGeneratedTemplate` Submodule <a name="`cloudformationGeneratedTemplate` Submodule" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGeneratedTemplate <a name="CloudformationGeneratedTemplate" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template awscc_cloudformation_generated_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

cloudformationgeneratedtemplate.NewCloudformationGeneratedTemplate(scope Construct, id *string, config CloudformationGeneratedTemplateConfig) CloudformationGeneratedTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig">CloudformationGeneratedTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig">CloudformationGeneratedTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration">PutTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration">ResetTemplateConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTemplateConfiguration` <a name="PutTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration"></a>

```go
func PutTemplateConfiguration(value CloudformationGeneratedTemplateTemplateConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---

##### `ResetTemplateConfiguration` <a name="ResetTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration"></a>

```go
func ResetTemplateConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

cloudformationgeneratedtemplate.CloudformationGeneratedTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

cloudformationgeneratedtemplate.CloudformationGeneratedTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

cloudformationgeneratedtemplate.CloudformationGeneratedTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

cloudformationgeneratedtemplate.CloudformationGeneratedTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationGeneratedTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationGeneratedTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGeneratedTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId">GeneratedTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress">Progress</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings">TotalWarnings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput">GeneratedTemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput">TemplateConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName">GeneratedTemplateName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `GeneratedTemplateId`<sup>Required</sup> <a name="GeneratedTemplateId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId"></a>

```go
func GeneratedTemplateId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Progress`<sup>Required</sup> <a name="Progress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress"></a>

```go
func Progress() CloudformationGeneratedTemplateProgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration"></a>

```go
func TemplateConfiguration() CloudformationGeneratedTemplateTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a>

---

##### `TotalWarnings`<sup>Required</sup> <a name="TotalWarnings" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings"></a>

```go
func TotalWarnings() *f64
```

- *Type:* *f64

---

##### `GeneratedTemplateNameInput`<sup>Optional</sup> <a name="GeneratedTemplateNameInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput"></a>

```go
func GeneratedTemplateNameInput() *string
```

- *Type:* *string

---

##### `TemplateConfigurationInput`<sup>Optional</sup> <a name="TemplateConfigurationInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput"></a>

```go
func TemplateConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `GeneratedTemplateName`<sup>Required</sup> <a name="GeneratedTemplateName" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName"></a>

```go
func GeneratedTemplateName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGeneratedTemplateConfig <a name="CloudformationGeneratedTemplateConfig" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

&cloudformationgeneratedtemplate.CloudformationGeneratedTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GeneratedTemplateName: *string,
	TemplateConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName">GeneratedTemplateName</a></code> | <code>*string</code> | The name assigned to the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | The configuration details of the generated template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GeneratedTemplateName`<sup>Required</sup> <a name="GeneratedTemplateName" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName"></a>

```go
GeneratedTemplateName *string
```

- *Type:* *string

The name assigned to the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#generated_template_name CloudformationGeneratedTemplate#generated_template_name}

---

##### `TemplateConfiguration`<sup>Optional</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration"></a>

```go
TemplateConfiguration CloudformationGeneratedTemplateTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

The configuration details of the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#template_configuration CloudformationGeneratedTemplate#template_configuration}

---

### CloudformationGeneratedTemplateProgress <a name="CloudformationGeneratedTemplateProgress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

&cloudformationgeneratedtemplate.CloudformationGeneratedTemplateProgress {

}
```


### CloudformationGeneratedTemplateTemplateConfiguration <a name="CloudformationGeneratedTemplateTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

&cloudformationgeneratedtemplate.CloudformationGeneratedTemplateTemplateConfiguration {
	DeletionPolicy: *string,
	UpdateReplacePolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | The DeletionPolicy assigned to resources in the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy">UpdateReplacePolicy</a></code> | <code>*string</code> | The UpdateReplacePolicy assigned to resources in the generated template. |

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

The DeletionPolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#deletion_policy CloudformationGeneratedTemplate#deletion_policy}

---

##### `UpdateReplacePolicy`<sup>Optional</sup> <a name="UpdateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy"></a>

```go
UpdateReplacePolicy *string
```

- *Type:* *string

The UpdateReplacePolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_generated_template#update_replace_policy CloudformationGeneratedTemplate#update_replace_policy}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGeneratedTemplateProgressOutputReference <a name="CloudformationGeneratedTemplateProgressOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

cloudformationgeneratedtemplate.NewCloudformationGeneratedTemplateProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGeneratedTemplateProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed">ResourcesFailed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending">ResourcesPending</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing">ResourcesProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded">ResourcesSucceeded</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesFailed`<sup>Required</sup> <a name="ResourcesFailed" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed"></a>

```go
func ResourcesFailed() *f64
```

- *Type:* *f64

---

##### `ResourcesPending`<sup>Required</sup> <a name="ResourcesPending" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending"></a>

```go
func ResourcesPending() *f64
```

- *Type:* *f64

---

##### `ResourcesProcessing`<sup>Required</sup> <a name="ResourcesProcessing" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing"></a>

```go
func ResourcesProcessing() *f64
```

- *Type:* *f64

---

##### `ResourcesSucceeded`<sup>Required</sup> <a name="ResourcesSucceeded" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded"></a>

```go
func ResourcesSucceeded() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationGeneratedTemplateProgress
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a>

---


### CloudformationGeneratedTemplateTemplateConfigurationOutputReference <a name="CloudformationGeneratedTemplateTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationgeneratedtemplate"

cloudformationgeneratedtemplate.NewCloudformationGeneratedTemplateTemplateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGeneratedTemplateTemplateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy">ResetUpdateReplacePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetUpdateReplacePolicy` <a name="ResetUpdateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy"></a>

```go
func ResetUpdateReplacePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput">UpdateReplacePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy">UpdateReplacePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `UpdateReplacePolicyInput`<sup>Optional</sup> <a name="UpdateReplacePolicyInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput"></a>

```go
func UpdateReplacePolicyInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `UpdateReplacePolicy`<sup>Required</sup> <a name="UpdateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy"></a>

```go
func UpdateReplacePolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



